<!-- bundle -->
<!-- Vendor js -->
<script src="{{ asset('assets/js/vendor.min.js') }}"></script>
@yield('script')
<!-- App js -->
<script src="{{ asset('assets/js/app.min.js') }}"></script>

<script>
    //delete
    $('.delete').click(function(e) {
        var that = $(this)

        e.preventDefault();

        var n = new Noty({
            text: "@lang('تأكيد الحذف')",
            type: "warning",
            killer: true,
            buttons: [
                Noty.button("@lang('نعم')", 'btn btn-success mr-2', function() {
                    that.closest('form').submit();
                }),

                Noty.button("@lang('لا')", 'btn btn-primary mr-2', function() {
                    n.close();
                })
            ]
        });

        n.show();

    }); //end of delete

    n.show();

    }); //end of delete

    $('.update').click(function(e) {

        var that = $(this)

        e.preventDefault();

        var n = new Noty({
            text: "@lang('تأكيد انهاء الشهر')",
            type: "warning",
            killer: true,
            buttons: [
                Noty.button("@lang('نعم')", 'btn btn-success mr-2', function() {
                    that.closest('form').submit();
                }),

                Noty.button("@lang('لا')", 'btn btn-primary mr-2', function() {
                    n.close();
                })
            ]
        });

        n.show();

    }); //end of delete

</script>
@yield('script-bottom')
