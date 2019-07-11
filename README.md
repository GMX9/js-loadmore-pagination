# js-loadmore-pagination
Load More button, that loads content dynamicly to use in projects.

### How to use:

Load the function loadMore_Pagination(), set the container and items class and also the amount of items you want to display.
Understanding first the function:
```
loadMore_Pagination(container_class,items_class,amount_to_display);
```
Now let's load the main js file needed so that our load more function works:
```
 <script src="../path/pagination.loadmore.js"></script>
```
Finally let's set call the function with their due elements:
```
 <script>
 loadMore_Pagination("#load_btn_zone",".blog-list-simple",2);
 </script>
```
Now it's done.
You can edit your button in the main JS file or change it's class.
