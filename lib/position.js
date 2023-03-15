/*
 * from some weird format in degrees to decimal :)
 */
function convertPoint(point)
{
    var integerPart = ~~(Math.round(point) / 100),
        decimalPart = (point - (integerPart * 100)) / 60;
    return (integerPart + decimalPart).toFixed(6);
}

/*
 * convert the sign.
 * West and South are negative coordinates.
 */
function toSign(c)
{
    return c === "S" || c === "W" ? -1 : 1;
}

function Position(message)
{
    var parts = message.split(",");
    this.imei = parts[0].split(":")[1];
    this.type = parts[1];
    this.date = new Date(
        parseInt("20" + parts[2].substr(0, 2), 10),
        parseInt(parts[2].substr(2, 2), 10),
        parseInt(parts[2].substr(4, 2), 10),
        parseInt(parts[2].substr(6, 2), 10),
        parseInt(parts[2].substr(8, 2), 10));

    this.fix = parts[5];
    this.lat = toSign(parts[8]) * convertPoint(parseFloat(parts[7])),
        this.lng = toSign(parts[10]) * convertPoint(parseFloat(parts[9]));
    this.speed = parseFloat(parts[11]) * 1.85;
    this.course = parseFloat(parts[12]);
}

module.exports = Position;
