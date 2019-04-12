$(document).ready(function () {

    $("#submitButton").on("click", function () {

        var searchPlate = $(":input:first").val();

        if (searchPlate) {
            $.ajax({
                url: "https://opendata.rdw.nl/resource/m9d7-ebf2.json?kenteken=" + searchPlate,
                type: "GET",
                data: {
                    "$limit": 50,
                    "$$app_token": "c8ev8w1TK2HLCCpF57LYRbwtk"
                }
            }).done(function (data) {

                if (data) {

                    var vehicleColor;

                    $.each(data[0], function (key, value) {
                        if (key == "eerste_kleur") {
                            vehicleColor = value;
                            return false; // break
                        }
                    });
                }
                if (vehicleColor) {
                    console.log("vehicleColor: " + vehicleColor);
                    $("#outputColor").html("Voertuig met kenteken <strong>" + searchPlate + "</strong> is van <strong>" + vehicleColor + "</strong> kleur");
                }

            });
        }
    });

});