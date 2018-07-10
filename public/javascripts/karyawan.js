var datakaryawan = [];

// DOM Ready 
$(document).ready(function() {
  populateTable();
});

// Functions 

// Fill table with data
function populateTable() {

  // Empty content string
  var tableContent = '';

  $.getJSON( '/users/karyawan', function( data ) {

    // For each item in our JSON, add a table row and cells to the content string
    $.each(data, function(){
      tableContent += '<tr>';
      tableContent += '<td><a href="#" class="tampilkannama" rel="' + this.nama + '">' + this.nama + '</a></td>';
      tableContent += '<td>' + this.alamat + '</td>';
      tableContent += '<td>' + this.jabatan + '</td>';
      tableContent += '<td>' + this.gajipokok + '</td>';
      tableContent += '</tr>';
    });

    // Inject the whole content string into our existing HTML table
    $('#karyawan table tbody').html(tableContent);
  });
};