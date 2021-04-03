import Cors from "cors";
var crypto = require("crypto");

// const cors = Cors({
//     methods: ["POST", "HEAD"],
// });

// function runMiddleware(req, res, fn) {
//     return new Promise((resolve, reject) => {
//         fn(req, res, (result) => {
//             if (result instanceof Error) {
//                 return reject(result);
//             }

//             return resolve(result);
//         });
//     });
// }

export default function deleteUserHandler(req, res) {
    //     await runMiddleware(req, res, cors);
    if (req.method === "POST") {
        function base64decode(data) {
            while (data.length % 4 !== 0) {
                data += "=";
            }
            data = data.replace(/-/g, "+").replace(/_/g, "/");
            return new Buffer(data, "base64").toString("utf-8");
        }

        function parseSignedRequest(signedRequest) {
            var encoded_data = signedRequest.split(".", 2);
            // decode the data
            var sig = encoded_data[0];
            var json = base64decode(encoded_data[1]);
            var data = JSON.parse(json);
            if (
                !data.algorithm ||
                data.algorithm.toUpperCase() != "HMAC-SHA256"
            ) {
                throw Error(
                    "Unknown algorithm: " +
                        data.algorithm +
                        ". Expected HMAC-SHA256"
                );
            }
            var expected_sig = crypto
                .createHmac("sha256", process.env.NEXT_PUBLIC_INSTAGRAM_SECRET)
                .update(encoded_data[1])
                .digest("base64")
                .replace(/\+/g, "-")
                .replace(/\//g, "_")
                .replace("=", "");
            if (sig !== expected_sig) {
                throw Error(
                    "Invalid signature: " + sig + ". Expected " + expected_sig
                );
            }
            return data;
        }
    }
}
