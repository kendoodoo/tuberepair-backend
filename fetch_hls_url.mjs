import { Innertube } from 'youtubei.js';
import {writeFileSync} from 'node:fs';
console.warn = () => {};
const youtube = await Innertube.create({
    // device_category: "MOBILE",
    // retrieve_player: false,
    // client_type: "iOS",
});
const rick = await youtube.getInfo(process.argv[2], "iOS");
console.log(rick.streaming_data.hls_manifest_url)