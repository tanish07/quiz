var api = "webapi/room";
$.get(api, function (table, status) {
    if (status == "success") {
        var table_data_body = "";
        for (var i = 0; i < table.length; i++) {
            table_data_body += '<tr>'
                + '<td>' + i + 1 + '</td>'
                + '<td>' + table[i].Day_of_the_week + '</td>'
                + '<td>' + table[i].slot1 + '</td>'
                + '<td>' + table[i].slot2 + '</td>'
                + '<td>' + table[i].slot3 + '</td>'
                + '<td>' + table[i].slot4 + '</td>'
                + '</tr>';            						
        }
        $('#TimeTable tbody').html(table_data_body);
    }
    $('#TimeTable').DataTable();
});