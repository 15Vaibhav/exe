var color =

    [
        {
            "percentage": -100,
            "color_code": "#990000"
        },
        {
            "percentage": -95,
            "color_code": "#890000"
        },
        {
            "percentage": -90,
            "color_code": "#9d0000"
        },
        {
            "percentage": -85,
            "color_code": "#b10000"
        },
        {
            "percentage": -80,
            "color_code": "#c40000"
        },
        {
            "percentage": -75,
            "color_code": "#d80000"
        },
        {
            "percentage": -70,
            "color_code": "#eb0000"
        },
        {
            "percentage": -65,
            "color_code": "#ff0000"
        },
        {
            "percentage": -60,
            "color_code": "#ff1414"
        },
        {
            "percentage": -55,
            "color_code": "#ff2727"
        },
        {
            "percentage": -50,
            "color_code": "#ff3b3b"
        },
        {
            "percentage": -45,
            "color_code": "#ff4e4e"
        },
        {
            "percentage": -40,
            "color_code": "#ff6262"
        },
        {
            "percentage": -35,
            "color_code": "#ff7676"
        },
        {
            "percentage": -30,
            "color_code": "#ff8989"
        },
        {
            "percentage": -25,
            "color_code": "#ff9d9d"
        },
        {
            "percentage": -20,
            "color_code": "#ffb1b1"
        },
        {
            "percentage": -15,
            "color_code": "#ffc4c4"
        },
        {
            "percentage": -10,
            "color_code": "#ffd8d8"
        },
        {
            "percentage": -5,
            "color_code": "#ffebeb"
        },
      
        {
            "percentage": 5,
            "color_code": "#e5ffe5"
        },
        {
            "percentage": 10,
            "color_code": "#ccffcc"
        },
        {
            "percentage": 15,
            "color_code": "#b2ffb2"
        },
        {
            "percentage": 20,
            "color_code": "#99ff99"
        },
        {
            "percentage": 25,
            "color_code": "#7fff7f"
        },
        {
            "percentage": 30,
            "color_code": "#66ff66"
        },
        {
            "percentage": 35,
            "color_code": "#4cff4c"
        },
        {
            "percentage": 40,
            "color_code": "#32ff32"
        },
        {
            "percentage": 45,
            "color_code": "#19ff19"
        },
        {
            "percentage": 50,
            "color_code": "#00ff00"
        },
        {
            "percentage": 55,
            "color_code": "#00ff00"
        },
        {
            "percentage": 60,
            "color_code": "#00e500"
        },
        {
            "percentage": 65,
            "color_code": "#00cc00"
        },
        {
            "percentage": 70,
            "color_code": "#00b200"
        },
        {
            "percentage": 75,
            "color_code": "#009900"
        },
        {
            "percentage": 80,
            "color_code": "#007f00"
        },
        {
            "percentage": 85,
            "color_code": "#006600"
        },
        {
            "percentage": 90,
            "color_code": "#004c00"
        },
        {
            "percentage": 95,
            "color_code": "#003300"
        },
        {
            "percentage": 100,
            "color_code": "#003300"
        },
    
    ]
$(document).ready(function () {
    $.getJSON("./row.json", function (restData) {

        for (var i = 0; i < restData.length; i++) {


            $('#repLast-table').append(
                '<table style="width:100%" >'
                + '<tr id="row_1">'
                + '<td style="font-size: x-small;text-align: center; font-size: 10px;color:black;font-weight:bold" class="muc1" rowspan="2" >' + [i + 1] + '</td>'
                + '<td style="font-size: x-small;padding-left:12px; font-size: 10px;color:black;font-weight:bold;" class="muc2" rowspan="2" >' + restData[i].Bottler_Name + '</td>'
                + '<td style="font-size: x-small;text-align: center;font-size: 10px;color:black;font-weight:bold" class="remainth1">' + restData[i].AB_NSR + '</td>'
                + '<td style="font-size: x-small;text-align: center;font-size: 10px;color:black;font-weight:bold" class="remainth1">' + restData[i].AB_Transaction + '</td>'
                + '<td style="font-size: x-small;text-align: center;font-size: 10px;color:black;font-weight:bold" class="remainth1">' + restData[i].AB_Affordable_ND + '</td>'
                + '<td style="font-size: x-small;text-align: center;font-size: 10px;color:black;font-weight:bold" class="remainth1">' + restData[i].AB_DLZ_Mix + '</td>'
                + '<td style="font-size: x-small;text-align: center;font-size: 10px;color:black;font-weight:bold" class="remainth1">' + restData[i].AB_Net_New_CDE + '</td>'
                + '<td style="font-size: x-small;text-align: center;font-size: 10px;color:black;font-weight:bold" class="remainth1">' + restData[i].AB_IC + '</td>'
                + '<td style="font-size: x-small;text-align: center;font-size: 10px;color:black;font-weight:bold" class="remainth1">' + restData[i].AB_INC_NSR_Premium + '</td>'
                + '<td style="font-size: x-small;text-align: center;font-size: 10px;color:black;font-weight:bold" class="remainth1">' + restData[i].AB_Stills_Value_Share + '</td>'
                + '<td style="font-size: x-small;text-align: center;font-size: 10px;color:black;font-weight:bold" class="remainth1">' + restData[i].AB_RED_Score + '</td>'
                + '<td style="font-size: x-small;text-align: center;font-size: 10px;color:black;font-weight:bold" class="remainth1">' + restData[i].AB_RED_Outlet_Coverage + '</td>'
                + '</tr>'


                + '<tr id="row_2">'
                + '<td style="font-size: x-small;text-align: center;font-size: 10px;color:black;font-weight:bold" class="remainth2">' + restData[i].GR_NSR + '</td>'
                + '<td style="font-size: x-small;text-align: center;font-size: 10px;color:black;font-weight:bold" class="remainth2">' + restData[i].GR_Transaction + '</td>'
                + '<td style="font-size: x-small;text-align: center;font-size: 10px;color:black;font-weight:bold" class="remainth2">' + restData[i].GR_Affordable_ND + '</td>'
                + '<td style="font-size: x-small;text-align: center;font-size: 10px;color:black;font-weight:bold" class="remainth2">' + restData[i].GR_DLZ_Mix + '</td>'
                + '<td style="font-size: x-small;text-align: center;font-size: 10px;color:black;font-weight:bold" class="remainth2">' + restData[i].GR_Net_New_CDE + '</td>'
                + '<td style="font-size: x-small;text-align: center;font-size: 10px;color:black;font-weight:bold" class="remainth2">' + restData[i].GR_IC + '</td>'
                + '<td style="font-size: x-small;text-align: center;font-size: 10px;color:black;font-weight:bold" class="remainth2">' + restData[i].GR_INC_NSR_Premium + '</td>'
                + '<td style="font-size: x-small;text-align: center;font-size: 10px;color:black;font-weight:bold" class="remainth2">' + restData[i].GR_Stills_Value_Share + '</td>'
                + '<td style="font-size: x-small;text-align: center;font-size: 10px;color:black;font-weight:bold" class="remainth2">' + restData[i].GR_RED_Score + '</td>'
                + '<td style="font-size: x-small;text-align: center;font-size: 10px;color:black;font-weight:bold" class="remainth2">' + restData[i].GR_RED_Outlet_Coverage + '</td>'
                + '</tr>'
                + '</table>'
            );

        }






        for (var i = 0; i < restData.length; i++) {


            $('#repLast-table_2').append(
                '<table style="width:100%" >'
                + '<tr id="row_1">'
                + '<td style="font-size: x-small;text-align: center; font-size: 10px;color:black;font-weight:bold" class="muc1" rowspan="2" >' + [i + 1] + '</td>'
                + '<td style="font-size: x-small;padding-left:12px; font-size: 10px;color:black;font-weight:bold;" class="muc2" rowspan="2" >' + restData[i].Bottler_Name + '</td>'
                + '<td style="font-size: x-small;text-align: center;font-size: 10px;color:black;font-weight:bold" class="remainth1">' + restData[i].AB_NSR + '</td>'
                + '<td style="font-size: x-small;text-align: center;font-size: 10px;color:black;font-weight:bold" class="remainth1">' + restData[i].AB_Transaction + '</td>'
                + '<td style="font-size: x-small;text-align: center;font-size: 10px;color:black;font-weight:bold" class="remainth1">' + restData[i].AB_Affordable_ND + '</td>'
                + '<td style="font-size: x-small;text-align: center;font-size: 10px;color:black;font-weight:bold" class="remainth1">' + restData[i].AB_DLZ_Mix + '</td>'
                + '<td style="font-size: x-small;text-align: center;font-size: 10px;color:black;font-weight:bold" class="remainth1">' + restData[i].AB_Net_New_CDE + '</td>'
                + '<td style="font-size: x-small;text-align: center;font-size: 10px;color:black;font-weight:bold" class="remainth1">' + restData[i].AB_IC + '</td>'
                + '<td style="font-size: x-small;text-align: center;font-size: 10px;color:black;font-weight:bold" class="remainth1">' + restData[i].AB_INC_NSR_Premium + '</td>'
                + '<td style="font-size: x-small;text-align: center;font-size: 10px;color:black;font-weight:bold" class="remainth1">' + restData[i].AB_Stills_Value_Share + '</td>'
                + '<td style="font-size: x-small;text-align: center;font-size: 10px;color:black;font-weight:bold" class="remainth1">' + restData[i].AB_RED_Score + '</td>'
                + '<td style="font-size: x-small;text-align: center;font-size: 10px;color:black;font-weight:bold" class="remainth1">' + restData[i].AB_RED_Outlet_Coverage + '</td>'
                + '</tr>'


                + '<tr id="row_2">'
                + '<td style="font-size: x-small;text-align: center;font-size: 10px;color:black;font-weight:bold" class="remainth2">' + restData[i].GR_NSR + '</td>'
                + '<td style="font-size: x-small;text-align: center;font-size: 10px;color:black;font-weight:bold" class="remainth2">' + restData[i].GR_Transaction + '</td>'
                + '<td style="font-size: x-small;text-align: center;font-size: 10px;color:black;font-weight:bold" class="remainth2">' + restData[i].GR_Affordable_ND + '</td>'
                + '<td style="font-size: x-small;text-align: center;font-size: 10px;color:black;font-weight:bold" class="remainth2">' + restData[i].GR_DLZ_Mix + '</td>'
                + '<td style="font-size: x-small;text-align: center;font-size: 10px;color:black;font-weight:bold" class="remainth2">' + restData[i].GR_Net_New_CDE + '</td>'
                + '<td style="font-size: x-small;text-align: center;font-size: 10px;color:black;font-weight:bold" class="remainth2">' + restData[i].GR_IC + '</td>'
                + '<td style="font-size: x-small;text-align: center;font-size: 10px;color:black;font-weight:bold" class="remainth2">' + restData[i].GR_INC_NSR_Premium + '</td>'
                + '<td style="font-size: x-small;text-align: center;font-size: 10px;color:black;font-weight:bold" class="remainth2">' + restData[i].GR_Stills_Value_Share + '</td>'
                + '<td style="font-size: x-small;text-align: center;font-size: 10px;color:black;font-weight:bold" class="remainth2">' + restData[i].GR_RED_Score + '</td>'
                + '<td style="font-size: x-small;text-align: center;font-size: 10px;color:black;font-weight:bold" class="remainth2">' + restData[i].GR_RED_Outlet_Coverage + '</td>'
                + '</tr>'
                + '</table>'
            );

        }
$('#repLast-table #row_2').each(function () {
    $(this).find(".remainth2:eq(0)").css("backgroundColor", hexRGB($(this).find(".remainth2:eq(0)").html()))
    $(this).find(".remainth2:eq(1)").css("backgroundColor", hexRGB($(this).find(".remainth2:eq(1)").html()))
    $(this).find(".remainth2:eq(2)").css("backgroundColor", hexRGB($(this).find(".remainth2:eq(2)").html()))
    $(this).find(".remainth2:eq(3)").css("backgroundColor", hexRGB($(this).find(".remainth2:eq(3)").html()))
    $(this).find(".remainth2:eq(4)").css("backgroundColor", hexRGB($(this).find(".remainth2:eq(4)").html()))
    $(this).find(".remainth2:eq(5)").css("backgroundColor", hexRGB($(this).find(".remainth2:eq(5)").html()))
    $(this).find(".remainth2:eq(6)").css("backgroundColor", hexRGB($(this).find(".remainth2:eq(6)").html()))
    $(this).find(".remainth2:eq(7)").css("backgroundColor", hexRGB($(this).find(".remainth2:eq(7)").html()))
    $(this).find(".remainth2:eq(8)").css("backgroundColor", hexRGB($(this).find(".remainth2:eq(8)").html()))
    $(this).find(".remainth2:eq(9)").css("backgroundColor", hexRGB($(this).find(".remainth2:eq(9)").html()))
});


$('#repLast-table_2 #row_2').each(function () {
    $(this).find(".remainth2:eq(0)").css("backgroundColor", hexRGB($(this).find(".remainth2:eq(0)").html()))
    $(this).find(".remainth2:eq(1)").css("backgroundColor", hexRGB($(this).find(".remainth2:eq(1)").html()))
    $(this).find(".remainth2:eq(2)").css("backgroundColor", hexRGB($(this).find(".remainth2:eq(2)").html()))
    $(this).find(".remainth2:eq(3)").css("backgroundColor", hexRGB($(this).find(".remainth2:eq(3)").html()))
    $(this).find(".remainth2:eq(4)").css("backgroundColor", hexRGB($(this).find(".remainth2:eq(4)").html()))
    $(this).find(".remainth2:eq(5)").css("backgroundColor", hexRGB($(this).find(".remainth2:eq(5)").html()))
    $(this).find(".remainth2:eq(6)").css("backgroundColor", hexRGB($(this).find(".remainth2:eq(6)").html()))
    $(this).find(".remainth2:eq(7)").css("backgroundColor", hexRGB($(this).find(".remainth2:eq(7)").html()))
    $(this).find(".remainth2:eq(8)").css("backgroundColor", hexRGB($(this).find(".remainth2:eq(8)").html()))
    $(this).find(".remainth2:eq(9)").css("backgroundColor", hexRGB($(this).find(".remainth2:eq(9)").html()))
});
});
// dropdown   

$('.dropdown-el').click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).toggleClass('expanded');
        $('#' + $(e.target).attr('for')).prop('checked', true);
    });
    $(document).click(function () {
        $('.dropdown-el').removeClass('expanded');
    });


// color mapping 
    function hexRGB(percentage_value) {

        array = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, -5, -10, -15, -20, -25, -30, -35, -40, -45, -50, -55, -60, -65, -70, -75, -80, -85, -90, -95, -100];

        if (isNaN(percentage_value)) {
            percentage_value = 0;
        }
        var colorKey = Math.round(percentage_value);
        var mappedEvents;

        if (colorKey > 100)
            colorKey = 100;
        else if (colorKey < -100)
            colorKey = -100;
            else if (colorKey < -100)
            colorKey = -100;
        else if (colorKey == 0)
            return [255, 255, 255];
            
        else {
            colorKey = (closest(percentage_value, array));

            color.map(e => {
                if (e.percentage === colorKey) {
                    mappedEvents = e.color_code

                }
            })
        }
        return mappedEvents;

    }
// find nearest value

    function closest(num, arr) {
        var curr = arr[0];
        var diff = Math.abs(num - curr);
        for (var val = 0; val < arr.length; val++) {
            var newdiff = Math.abs(num - arr[val]);
            if (newdiff < diff) {
                diff = newdiff;
                curr = arr[val];
            }
        }
        return curr;
    }





});
