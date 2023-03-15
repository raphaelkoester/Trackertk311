Alterations of the gpstracker library made by Raphael Fonseca, redesigned for TK311

-   TK311

# Install

    npm install tracker311

# Usage

A very basic example will be this

```javascript
import * as gpstracker from "tracker311";

var server = gpstracker.create().listen(8000, () => {
	console.log("listening your gps trackers on port", 8000);
});

server.trackers.on("connected", (tracker) => {
	console.log("tracker connected with imei:", tracker.imei);

	tracker.on("help me", () => {
		console.log(tracker.imei + " pressed the help button!!");
	});

	tracker.on("position", (position) => {
		console.log(
			"tracker {" + tracker.imei + "}: lat",
			position.lat,
			"lng",
			position.lng,
			"speed",
			position.speed,
			"course",
			position.course,
			"fix",
			position.fix,
			"date",
			position.date,
			"type",
			position.type,
		);
	});

	tracker.trackEvery(10).seconds();
});
```

# Licence

MIT
