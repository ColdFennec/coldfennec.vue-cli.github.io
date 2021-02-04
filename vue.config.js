module.exports = {
    pwa: {
        manifestOptions: {
            background_color:"#B8EDCE"

        },
        name: "Fetch That Joke!",
        themeColor: "#5198DA",
        workboxOptions: {
            runtimeCaching: [
                {
                     handler: "NetworkFirst",
                    options: {
                        networkTimeoutSeconds: 5
                    },
                    urlPattern: "https://official-joke-api.appspot.com/jokes/general/ten"
                }
            ],
            // manifestTransforms: [
            //     (manifest) => ({
            //         manifest: manifest.concat([
            //             { revision: 0, url: "/some-cachefirst-file.txt'"}
            //         ])
            //     })
            // ]
            
        }
    }
}