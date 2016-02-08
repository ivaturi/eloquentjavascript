/*
  Polymorphism
  ------------
  From wikipedia:
  Polymorphism is the ability in computer programming to present the same programming interface for differing underlying forms.

  From Eloquent Javascript:
  "When a piece of code is written to work with objects that have a certain interface, any kind of object that happens to support this interface can be plugged into the code, and it will just work.

  This technique is called polymorphism."

*/
var log = console.log;

/*
Laying out a table
------------------
we will write a program that, given an array of arrays of table cells, builds up a string that contains a nicely laid out table—meaning that the columns are straight and the rows are aligned. Something like this:

name         height country
------------ ------ -------------
Kilimanjaro    5895 Tanzania
Everest        8848 Nepal
Mount Fuji     3776 Japan
Mont Blanc     4808 Italy/France
Vaalserberg     323 Netherlands
Denali         6168 United States
Popocatepetl   5465 Mexico


Planned interface:

  minHeight() - returns the minimum height required by a cell, in lines
  minWidth()  - returns the minimum width required by the cell, in characters
  draw(width, height) - returns an array of length *height*, containing a series of strings that are *width* wide each.
*/

// compute the row height according to the maximum height required for an element of *rows*
var rowHeights = function(rows){
  return rows.map(function(row){
    return row.reduce(function(max, cell){
      return Math.max(max, cell.minHeight());
    },0);
  });
};
