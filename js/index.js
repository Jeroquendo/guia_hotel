
$(function(){
  $("[data-toggle='tooltip']").tooltip();
  $("[data-toggle='popover']").popover();
  $('.carousel').carousel({
    interval: 1500
  });
  $('#contacto').on('show.bs.modal', function(e){
    console.log('el modal se está mostrando');


    $('#contactoBtn').removeClass('btn-outline-success');
    $('#contactoBtn').addClass('btn-primary');
    $('#contactoBtn').prop('disable', true);
  });
  $('#contacto').on('shown.bs.modal', function(e){
    console.log('el modal se mostró');
  });
  $('#contacto').on('hide.bs.modal', function(e){
    console.log('el modal se ocultará');
  });
  $('#contacto').on('hidden.bs.modal', function(e){
    console.log('el modal se ocultó');

    $('#contactoBtn').removeClass('btn-primary');
    $('#contactoBtn').addClass('btn-outline-success');
    $('#contactoBtn').prop('disabled',false)

  });

});
