var color =

    [{
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


    //*************pannel********************************************************************************** */
    $('#repLast_2-table').append(

        '<table style="width:100%;border-spacing: 8px;border-collapse: separate;border:none;table-layout: fixed;" >' +
        '<tr id="row_1">' +

        '<td style="font-size: x-small;text-align: center; font-size: 10px;color:black;font-weight:bold" class="muc1" rowspan="2" >' +
        '<div class="col-sm-12" style="background-color:gray;margin: 0%;padding: 0%;height: 90px;">' +
        '<p style="color: white;margin-top:42px;margin-left: 0px;">S.N.</p>' +
        '</div>' +
        '</td>' +


        '<td style="font-size: x-small; font-size: 10px;color:black;font-weight:bold;" class="muc2" rowspan="2" >' +
        '<div class="col-sm-12" style="background-color:gray;margin: 0%;padding: 0%;height: 90px;">' +
        '<p style="color: white;margin-top:42px;margin-left: 9px;">BOTTLER NAME.</p>' +
        '</div>' + '</td>'



        +
        '<td style="font-size: x-small;font-size: 10px;color:black;font-weight:bold;padding:0" class="remainth4">' +
        '<div class="row" style="margin:0%;padding: 0%;width:100%;height:90px">' +

        '<div class="col-sm-12" style="background-color:gray;margin: 0%;padding: 0%;">' +
        '<p style="color: white;margin-top: 4px;text-align: center;font-size:12px">COMMERCIAL METRICS</p>' +
        '</div>' +
        '<div class="row" style="margin:0%;padding: 0%;width:100%;background-color: #DCDCDC";>' +
        '<table style="width:100%;margin: 0%;border:none" >' +
        '<div>' +
        '<tr style="height:32px;border: 0">' +


        '<td style="font-size: x-small;text-align: center;border: 0" class="remainth">' +
        '<img src="./icons/Picture1.png" alt="Snow" style="width:60%;height:100%;background-color: #DCDCDC">' +

        '</td>' +

        '<td style="font-size: x-small;text-align: center;border: 0" class="remainth">' +
        '<img src="./icons/Picture2.png" alt="Snow" style="width:60%;height:100%;background-color: #DCDCDC">' +

        '</td>' +

        '<td style="font-size: x-small;text-align: center;border: 0;padding:0" class="remainth">' +
        '<img src="./icons/Picture3.png" alt="Snow"style="width:55%;height:95%;background-color: #DCDCDC">' +

        '</td>' +

        '<td style="font-size: x-small;text-align: center;border: 0" class="remainth">' +
        '<img src="./icons/Picture4.png" alt="Snow" style="width:50%;height:95%;background-color: #DCDCDC">' +

        '</td>' +

        '<td style="font-size: x-small;text-align: center;border: 0" class="remainth">' +
        '<img src="./icons/Picture5.png" alt="Snow" style="width:60%;height:100%;background-color: #DCDCDC">' +

        '</td>' +

        '<td style="font-size: x-small;text-align: center;border: 0" class="remainth">' +
        '<img src="./icons/Picture6.png" alt="Snow" style="width:60%;height:100%;background-color: #DCDCDC">' +

        '</td>' +


        ' </tr>' +

        ' <tr style="height:30px;border: 0">' +
        '<td style="font-size: x-small;text-align: center;border: 0" class="remainth">' +
        '<p class="uptable" style="font-style: oblique;">Affordable ND</p>' +
        '  </td>' +
        '<td style="font-size: x-small;text-align: center;border: 0" class="remainth">' +
        '<p class="uptable" style="font-style: oblique;">DLZ Mix</p>' +
        '  </td>' +
        '<td style="font-size: x-small;text-align: center;border: 0" class="remainth">' +
        '<p class="uptable" style="font-style: oblique;">Net New CDE</p>' +
        '  </td>' +
        '<td style="font-size: x-small;text-align: center;border: 0" class="remainth">' +
        '<p class="uptable" style="font-style: oblique;">IC Mix</p>' +
        '  </td>' +
        '<td style="font-size: x-small;text-align: center;border: 0" class="remainth">' +
        '<p class="uptable" style="font-style: oblique;">INC. NSR Premium</p>' +
        '  </td>' +
        '<td style="font-size: x-small;text-align: center;border: 0" class="remainth">' +
        '<p class="uptable" style="font-style: oblique;">Skills Value Share</p>' +
        '  </td>' +
        ' </tr>' +
        '</div>' +



        '</table>' +
        '</div>' +

        '</div>'






        +
        '</td>'





        +





        '<td style="font-size: x-small;text-align: center;font-size: 10px;color:black;font-weight:bold" class="remainth1">' +




        '<div class="col-sm-12" style="background-color:gray;margin: 0%;padding: 0%;height: 22px">' +
        '<p style="color: white;margin-top: 6px;text-align: center;font-size:12px">EXECUTION</p>' +
        '</div>' +
        '<br>' +
        ' <div class="col-sm-12" style="background-color:#DCDCDC;margin: 0%;padding: 0%;height: 70px">' +
        '<p style="color: black;margin-top: 6px;text-align:center;font-size: 11px;word-spacing: 30px;">Eexecution Composite Index</p>' +
        ' </div>' +

        '</td>' +




        '<td style="font-size: x-small;text-align: center;font-size: 10px;color:black;font-weight:bold" class="remainth3">' +

        '<div class="col-sm-12" style="background-color:gray;margin: 0%;padding: 0%;height: 22px ">' +
        '<p style="color: white;margin-top: 6px;text-align: center;font-size:12px">Total</p>' +
        '</div>' +
        '<br>' +
        '<div class="col-sm-6" style="background-color:#DCDCDC;margin: 0%;padding: 0%;height: 70px;border-right: 1px solid #808080;">' +
        '<img src="./icons/calendar.png" alt="Snow" style="width:50%;background-color: #DCDCDC;margin: 8px 0 8px 8px"> ' +
        '</div>' +
        ' <div class="col-sm-6" style="background-color:#DCDCDC;margin: 0%;padding: 0%;height: 70px">' +
        '<img src="./icons/2019.png" alt="Snow" style="width:50%;background-color: #DCDCDC;margin: 3px 0 8px 8px">' +

        '</div>' +


        '</td>' +



        '</tr>' +
        '</table>'


    );
// ******************************pannel tier2*********************************************************************

    $('#repLast_2-table_Tier_2').append(

        '<table style="width:100%;border-spacing: 8px;border-collapse: separate;border:none;table-layout: fixed;" >' +
        '<tr id="row_1">' +

        '<td style="font-size: x-small;text-align: center; font-size: 10px;color:black;font-weight:bold" class="muc1" rowspan="2" >' +
        '<div class="col-sm-12" style="background-color:gray;margin: 0%;padding: 0%;height: 90px;">' +
        '<p style="color: white;margin-top:42px;margin-left: 0px;">S.N.</p>' +
        '</div>' +
        '</td>' +


        '<td style="font-size: x-small; font-size: 10px;color:black;font-weight:bold;" class="muc2" rowspan="2" >' +
        '<div class="col-sm-12" style="background-color:gray;margin: 0%;padding: 0%;height: 90px;">' +
        '<p style="color: white;margin-top:42px;margin-left: 9px;">BOTTLER NAME.</p>' +
        '</div>' + '</td>'



        +
        '<td style="font-size: x-small;font-size: 10px;color:black;font-weight:bold;padding:0" class="remainth4">' +
        '<div class="row" style="margin:0%;padding: 0%;width:100%;height:90px">' +

        '<div class="col-sm-12" style="background-color:gray;margin: 0%;padding: 0%;">' +
        '<p style="color: white;margin-top: 4px;text-align: center;font-size:12px">COMMERCIAL METRICS</p>' +
        '</div>' +
        '<div class="row" style="margin:0%;padding: 0%;width:100%;background-color: #DCDCDC";>' +
        '<table style="width:100%;margin: 0%;border:none" >' +
        '<div>' +
        '<tr style="height:32px;border: 0">' +


        '<td style="font-size: x-small;text-align: center;border: 0" class="remainth">' +
        '<img src="./icons/Picture1.png" alt="Snow" style="width:60%;height:100%;background-color: #DCDCDC">' +

        '</td>' +

        '<td style="font-size: x-small;text-align: center;border: 0" class="remainth">' +
        '<img src="./icons/Picture2.png" alt="Snow" style="width:60%;height:100%;background-color: #DCDCDC">' +

        '</td>' +

        '<td style="font-size: x-small;text-align: center;border: 0;padding:0" class="remainth">' +
        '<img src="./icons/Picture3.png" alt="Snow"style="width:55%;height:95%;background-color: #DCDCDC">' +

        '</td>' +

        '<td style="font-size: x-small;text-align: center;border: 0" class="remainth">' +
        '<img src="./icons/Picture4.png" alt="Snow" style="width:50%;height:95%;background-color: #DCDCDC">' +

        '</td>' +

        '<td style="font-size: x-small;text-align: center;border: 0" class="remainth">' +
        '<img src="./icons/Picture5.png" alt="Snow" style="width:60%;height:100%;background-color: #DCDCDC">' +

        '</td>' +

        '<td style="font-size: x-small;text-align: center;border: 0" class="remainth">' +
        '<img src="./icons/Picture6.png" alt="Snow" style="width:60%;height:100%;background-color: #DCDCDC">' +

        '</td>' +


        ' </tr>' +

        ' <tr style="height:30px;border: 0">' +
        '<td style="font-size: x-small;text-align: center;border: 0" class="remainth">' +
        '<p class="uptable" style="font-style: oblique;">Affordable ND</p>' +
        '  </td>' +
        '<td style="font-size: x-small;text-align: center;border: 0" class="remainth">' +
        '<p class="uptable" style="font-style: oblique;">DLZ Mix</p>' +
        '  </td>' +
        '<td style="font-size: x-small;text-align: center;border: 0" class="remainth">' +
        '<p class="uptable" style="font-style: oblique;">Net New CDE</p>' +
        '  </td>' +
        '<td style="font-size: x-small;text-align: center;border: 0" class="remainth">' +
        '<p class="uptable" style="font-style: oblique;">IC Mix</p>' +
        '  </td>' +
        '<td style="font-size: x-small;text-align: center;border: 0" class="remainth">' +
        '<p class="uptable" style="font-style: oblique;">INC. NSR Premium</p>' +
        '  </td>' +
        '<td style="font-size: x-small;text-align: center;border: 0" class="remainth">' +
        '<p class="uptable" style="font-style: oblique;">Skills Value Share</p>' +
        '  </td>' +
        ' </tr>' +
        '</div>' +



        '</table>' +
        '</div>' +

        '</div>'






        +
        '</td>'





        +





        '<td style="font-size: x-small;text-align: center;font-size: 10px;color:black;font-weight:bold" class="remainth1">' +




        '<div class="col-sm-12" style="background-color:gray;margin: 0%;padding: 0%;height: 22px">' +
        '<p style="color: white;margin-top: 6px;text-align: center;font-size:12px">EXECUTION</p>' +
        '</div>' +
        '<br>' +
        ' <div class="col-sm-12" style="background-color:#DCDCDC;margin: 0%;padding: 0%;height: 70px">' +
        '<p style="color: black;margin-top: 6px;text-align:center;font-size: 11px;word-spacing: 30px;">Eexecution Composite Index</p>' +
        ' </div>' +

        '</td>' +




        '<td style="font-size: x-small;text-align: center;font-size: 10px;color:black;font-weight:bold" class="remainth3">' +

        '<div class="col-sm-12" style="background-color:gray;margin: 0%;padding: 0%;height: 22px ">' +
        '<p style="color: white;margin-top: 6px;text-align: center;font-size:12px">Total</p>' +
        '</div>' +
        '<br>' +
        '<div class="col-sm-6" style="background-color:#DCDCDC;margin: 0%;padding: 0%;height: 70px;border-right: 1px solid #808080;">' +
        '<img src="./icons/calendar.png" alt="Snow" style="width:50%;background-color: #DCDCDC;margin: 8px 0 8px 8px"> ' +
        '</div>' +
        ' <div class="col-sm-6" style="background-color:#DCDCDC;margin: 0%;padding: 0%;height: 70px">' +
        '<img src="./icons/2019.png" alt="Snow" style="width:50%;background-color: #DCDCDC;margin: 3px 0 8px 8px">' +

        '</div>' +


        '</td>' +



        '</tr>' +
        '</table>'


    );


});




$.getJSON("./screen2.json", function (restData) {

    for (var i = 0; i < restData.length; i++) {
        $('#repLast-table').append(
            '<table style="width:100%;border-spacing: 8px;border-collapse: separate;border:none;table-layout: fixed;" >' +
            '<tr id="row_1">' +
            '<td style="font-size: x-small;text-align: center; font-size: 10px;color:black;font-weight:bold" class="muc1" rowspan="2" >' + [i + 1] + '</td>' +
            '<td style="font-size: x-small;padding-left:12px; font-size: 10px;color:black;font-weight:bold;" class="muc2" rowspan="2" >' + restData[i].Bottler_Name + '</td>' +
            '<td style="font-size: x-small;font-size: 10px;color:black;font-weight:bold;padding:0" class="remainth4">' +
            '<div class="row" style="margin:0%;padding: 0%;width:100%;">' +
            '<table style="width:100%;margin: 0%;border:0">' +
            '<div>' +
            ' <tr style="height:32.19px;border: 0" id="inner_row">' +
            '<td style="font-size: x-small;text-align: center;font-size: 10px;color:black;font-weight:bold;border-right:0 solid gray" class="remainth1">' + restData[i].A_Value + '</td>' +
            '<td style="font-size: x-small;text-align: center;font-size: 10px;color:black;font-weight:bold;border-right:0 solid gray" class="remainth1">' + restData[i].C_Value + '</td>' +
            '<td style="font-size: x-small;text-align: center;font-size: 10px;color:black;font-weight:bold;border-right:0 solid gray" class="remainth1">' + restData[i].T_Value + '</td>' +
            '<td style="font-size: x-small;text-align: center;font-size: 10px;color:black;font-weight:bold;border-right:0 solid gray" class="remainth1">' + restData[i].I_Value + '</td>' +
            '<td style="font-size: x-small;text-align: center;font-size: 10px;color:black;font-weight:bold;border-right:0 solid gray" class="remainth1">' + restData[i].O_Value + '</td>' +
            '<td style="font-size: x-small;text-align: center;font-size: 10px;color:black;font-weight:bold;border-right:0 solid gray" class="remainth1">' + restData[i].N_Value + '</td>' +
            ' </tr>' +
            '</div>' +
            '</table>' +
            '</div>' +
            '</td>' +
            '<td style="font-size: x-small;text-align: center;font-size: 10px;color:black;font-weight:bold" class="remainth1">' + restData[i].Exection_Value + '</td>' +
            '<td style="font-size: x-small;font-size: 10px;color:black;font-weight:bold;padding:0" class="remainth3">' +
            '<div class="row" style="margin:0%;padding: 0%;width:100%;">' +
            '<table style="width:100%;margin: 0%;">' +
            '<div>' +
            ' <tr style="height:32.19px;border: 0" id="inner_row_1">' +
            '<td style="font-size: x-small;text-align: center;font-size: 10px;color:black;font-weight:bold;border-right:.0 solid gray" class="remainth1">' + restData[i].MTD_Value + '</td>' +
            '<td style="font-size: x-small;text-align: center;font-size: 10px;color:black;font-weight:bold;border-right:.0 solid gray" class="remainth1">' + restData[i].YTD_Value + '</td>' +
            ' </tr>' +
            '</div>' +
            '</table>' +
            '</div>' +
            '</td>' +
            '</tr>' +
            '</table>'


        );

    }

    for (var i = 0; i < restData.length; i++) {
        $('#repLast-table_Tier_2').append(
            '<table style="width:100%;border-spacing: 8px;border-collapse: separate;border:none;table-layout: fixed;" >' +
            '<tr id="row_1">' +
            '<td style="font-size: x-small;text-align: center; font-size: 10px;color:black;font-weight:bold" class="muc1" rowspan="2" >' + [i + 1] + '</td>' +
            '<td style="font-size: x-small;padding-left:12px; font-size: 10px;color:black;font-weight:bold;" class="muc2" rowspan="2" >' + restData[i].Bottler_Name + '</td>' +
            '<td style="font-size: x-small;font-size: 10px;color:black;font-weight:bold;padding:0" class="remainth4">' +
            '<div class="row" style="margin:0%;padding: 0%;width:100%;">' +
            '<table style="width:100%;margin: 0%;border:0">' +
            '<div>' +
            ' <tr style="height:32.19px;border: 0" id="inner_row">' +
            '<td style="font-size: x-small;text-align: center;font-size: 10px;color:black;font-weight:bold;border-right:0 solid gray" class="remainth1">' + restData[i].A_Value + '</td>' +
            '<td style="font-size: x-small;text-align: center;font-size: 10px;color:black;font-weight:bold;border-right:0 solid gray" class="remainth1">' + restData[i].C_Value + '</td>' +
            '<td style="font-size: x-small;text-align: center;font-size: 10px;color:black;font-weight:bold;border-right:0 solid gray" class="remainth1">' + restData[i].T_Value + '</td>' +
            '<td style="font-size: x-small;text-align: center;font-size: 10px;color:black;font-weight:bold;border-right:0 solid gray" class="remainth1">' + restData[i].I_Value + '</td>' +
            '<td style="font-size: x-small;text-align: center;font-size: 10px;color:black;font-weight:bold;border-right:0 solid gray" class="remainth1">' + restData[i].O_Value + '</td>' +
            '<td style="font-size: x-small;text-align: center;font-size: 10px;color:black;font-weight:bold;border-right:0 solid gray" class="remainth1">' + restData[i].N_Value + '</td>' +
            ' </tr>' +
            '</div>' +
            '</table>' +
            '</div>' +
            '</td>' +
            '<td style="font-size: x-small;text-align: center;font-size: 10px;color:black;font-weight:bold" class="remainth1">' + restData[i].Exection_Value + '</td>' +
            '<td style="font-size: x-small;font-size: 10px;color:black;font-weight:bold;padding:0" class="remainth3">' +
            '<div class="row" style="margin:0%;padding: 0%;width:100%;">' +
            '<table style="width:100%;margin: 0%;">' +
            '<div>' +
            ' <tr style="height:32.19px;border: 0" id="inner_row_1">' +
            '<td style="font-size: x-small;text-align: center;font-size: 10px;color:black;font-weight:bold;border-right:.0 solid gray" class="remainth1">' + restData[i].MTD_Value + '</td>' +
            '<td style="font-size: x-small;text-align: center;font-size: 10px;color:black;font-weight:bold;border-right:.0 solid gray" class="remainth1">' + restData[i].YTD_Value + '</td>' +
            ' </tr>' +
            '</div>' +
            '</table>' +
            '</div>' +
            '</td>' +
            '</tr>' +
            '</table>'


        );

    }






    $('#repLast-table #row_1 #inner_row').each(function () {
        $(this).find(".remainth1:eq(0)").css("backgroundColor", hexRGB($(this).find(".remainth1:eq(0)").html(),'A_Value','A_Rank'))
        $(this).find(".remainth1:eq(1)").css("backgroundColor", hexRGB($(this).find(".remainth1:eq(1)").html(),'C_Value','C_Rank'))
        $(this).find(".remainth1:eq(2)").css("backgroundColor", hexRGB($(this).find(".remainth1:eq(2)").html(),'T_Value','T_Rank'))
        $(this).find(".remainth1:eq(3)").css("backgroundColor", hexRGB($(this).find(".remainth1:eq(3)").html(),'I_Value','I_Rank'))
        $(this).find(".remainth1:eq(4)").css("backgroundColor", hexRGB($(this).find(".remainth1:eq(4)").html(),'O_Value','O_Rank'))
        $(this).find(".remainth1:eq(5)").css("backgroundColor", hexRGB($(this).find(".remainth1:eq(5)").html(),'N_Value','N_Rank'))

    });

    $('#repLast-table #row_1').each(function () {
        $(this).find(".remainth1:eq(6)").css("backgroundColor", hexRGB($(this).find(".remainth1:eq(6)").html(),'Exection_Value','Exection_Rank'))
    });

    $('#repLast-table #row_1 #inner_row_1').each(function () {
        $(this).find(".remainth1:eq(0)").css("backgroundColor", hexRGB($(this).find(".remainth1:eq(0)").html(),'MTD_Value','MTD_Rank'))
        $(this).find(".remainth1:eq(1)").css("backgroundColor", hexRGB($(this).find(".remainth1:eq(1)").html(),'YTD_Value','YTD_Rank'))
});


$('#repLast-table_Tier_2 #row_1 #inner_row').each(function () {
    $(this).find(".remainth1:eq(0)").css("backgroundColor", hexRGB($(this).find(".remainth1:eq(0)").html(),'A_Value','A_Rank'))
    $(this).find(".remainth1:eq(1)").css("backgroundColor", hexRGB($(this).find(".remainth1:eq(1)").html(),'C_Value','C_Rank'))
    $(this).find(".remainth1:eq(2)").css("backgroundColor", hexRGB($(this).find(".remainth1:eq(2)").html(),'T_Value','T_Rank'))
    $(this).find(".remainth1:eq(3)").css("backgroundColor", hexRGB($(this).find(".remainth1:eq(3)").html(),'I_Value','I_Rank'))
    $(this).find(".remainth1:eq(4)").css("backgroundColor", hexRGB($(this).find(".remainth1:eq(4)").html(),'O_Value','O_Rank'))
    $(this).find(".remainth1:eq(5)").css("backgroundColor", hexRGB($(this).find(".remainth1:eq(5)").html(),'N_Value','N_Rank'))

});

$('#repLast-table_Tier_2 #row_1').each(function () {
    $(this).find(".remainth1:eq(6)").css("backgroundColor", hexRGB($(this).find(".remainth1:eq(6)").html(),'Exection_Value','Exection_Rank'))
});

$('#repLast-table_Tier_2 #row_1 #inner_row_1').each(function () {
    $(this).find(".remainth1:eq(0)").css("backgroundColor", hexRGB($(this).find(".remainth1:eq(0)").html(),'MTD_Value','MTD_Rank'))
    $(this).find(".remainth1:eq(1)").css("backgroundColor", hexRGB($(this).find(".remainth1:eq(1)").html(),'YTD_Value','YTD_Rank'))
});



    
$('.dropdown-el').click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).toggleClass('expanded');
        $('#' + $(e.target).attr('for')).prop('checked', true);
    });

    $(document).click(function () {
        $('.dropdown-el').removeClass('expanded');
    });

    function hexRGB(percentage_value,value,rank) {
        var mappedEvents;
      if((restData.find(x => x[value] ==percentage_value && x[rank]==1))){
          mappedEvents = '#B8E1C4'
      }
      else if((restData.find(x => x[value] ==percentage_value && x[rank]==2))){
        mappedEvents = '#FFE699'
      } else if((restData.find(x => x[value] ==percentage_value && x[rank]==3))){
        mappedEvents = '#FABDBF'
      }
      return mappedEvents
             
    }
        
})