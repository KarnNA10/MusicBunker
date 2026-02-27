var langText ={
"sortedByColumn": "sorted by column",
"ascending": "ascending",
"descending":"descending"
}

class SortableTable{
constructor(tableNode){
  this.tableNode = tableNode;

  this.columnHeaders = tableNode.querySelectorAll('thead th');

  this.sortColumns = [];

  for (var i = 0; i < this.columnHeaders.length; i++){
    var ch = this.columnHeaders[i];
    var buttonNode = ch.querySelector('button');
    if (buttonNode){
      this.sortColumns.push(i);
      buttonNode.setAttribute('data-column-index', i);
      buttonNode.addEventListener('click', this.handleClick.bind(this));
    }
    else
   {
      if (ch.classList.contains("no-sort")) continue;
      var buttonNode = document.createElement("button");
      buttonNode.innerHTML = ch.innerHTML.trim();
      buttonNode.setAttribute('data-column-index', i);
      buttonNode.addEventListener('click', this.handleClick.bind(this));
      var span = document.createElement("span");
      span.setAttribute("aria-hidden", "true");
      span.classList.add("sort-arrow");
      buttonNode.appendChild(span);
      ch.innerHTML ="";
      ch.appendChild(buttonNode);
    }
  }

  this.optionCheckbox = document.querySelector(
    'input[type="checkbox"][value="show-unsorted-icon"]'
  );

  if (this.optionCheckbox){
    this.optionCheckbox.addEventListener(
      'change',
      this.handleOptionChange.bind(this)
    );
    if (this.optionCheckbox.checked){
      this.tableNode.classList.add('show-unsorted-icon');
    }
  }

  var span = document.createElement("span");
  span.setAttribute("aria-live", "polite");
  span.classList.add("sr-announce");
  this.tableNode.parentNode.appendChild(span);
}

setColumnHeaderSort(columnIndex){
  if (typeof columnIndex === 'string'){
    columnIndex = parseInt(columnIndex);
  }

  for (var i = 0; i < this.columnHeaders.length; i++){
    var ch = this.columnHeaders[i];
    var buttonNode = ch.querySelector('button');
    if (i === columnIndex){
      var value = ch.getAttribute('aria-sort');
      if (value === 'descending'){
        ch.setAttribute('aria-sort', 'ascending');
        this.sortColumn(
          columnIndex,
          'ascending',
          ch.classList.contains('num')
        );
        var captionText = this.tableNode.caption.innerText;
        if(captionText.includes("(") ) captionText = captionText.substring(0, captionText.indexOf("("));
        captionText = captionText + " ("+ langText["sortedByColumn"]+ " '" + buttonNode.innerText +"' "+ langText["ascending"]+")"; 
        this.tableNode.caption.innerHTML = captionText;
        this.tableNode.parentNode.querySelector(".sr-announce").innerHTML = captionText;
      } else{
        ch.setAttribute('aria-sort', 'descending');
        this.sortColumn(
          columnIndex,
          'descending',
          ch.classList.contains('num')
        );
        var captionText = this.tableNode.caption.innerText;
        if(captionText.includes("(") ) captionText = captionText.substring(0, captionText.indexOf("("));
        captionText = captionText + " ("+ langText["sortedByColumn"]+ " '" + buttonNode.innerText +"' "+ langText["descending"]+")";
        this.tableNode.caption.innerHTML = captionText;
        this.tableNode.parentNode.querySelector(".sr-announce").innerHTML = captionText;

      }
    } else{
      if (ch.hasAttribute('aria-sort') && buttonNode){
        ch.removeAttribute('aria-sort');
      }
    }
  }
}

sortColumn(columnIndex, sortValue, isNumber){
  function compareValues(a, b){
    if (sortValue === 'ascending'){
      if (a.value === b.value){
        return 0;
      } else{
        if (isNumber){
          return a.value - b.value;
        } else{
          return a.value < b.value ? -1 : 1;
        }
      }
    } else{
      if (a.value === b.value){
        return 0;
      } else{
        if (isNumber){
          return b.value - a.value;
        } else{
          return a.value > b.value ? -1 : 1;
        }
      }
    }
  }

  if (typeof isNumber !== 'boolean'){
    isNumber = false;
  }

  var tbodyNode = this.tableNode.querySelector('tbody');
  var rowNodes = [];
  var dataCells = [];

  var rowNode = tbodyNode.firstElementChild;

  var index = 0;
  while (rowNode){
    rowNodes.push(rowNode);
    var rowCells = rowNode.querySelectorAll('th, td');
    var dataCell = rowCells[columnIndex];

    var data ={};
    data.index = index;
    data.value = dataCell.textContent.toLowerCase().trim();
    if (isNumber){
      data.value = parseFloat(data.value);
    }
    dataCells.push(data);
    rowNode = rowNode.nextElementSibling;
    index += 1;
  }

  dataCells.sort(compareValues);

  // remove rows
  while (tbodyNode.firstChild){
    tbodyNode.removeChild(tbodyNode.lastChild);
  }

  // add sorted rows
  for (var i = 0; i < dataCells.length; i += 1){
    tbodyNode.appendChild(rowNodes[dataCells[i].index]);
  }
}

/* EVENT HANDLERS */

handleClick(event){
  var tgt = event.currentTarget;
  this.setColumnHeaderSort(tgt.getAttribute('data-column-index'));
}

handleOptionChange(event){
  var tgt = event.currentTarget;

  if (tgt.checked){
    this.tableNode.classList.add('show-unsorted-icon');
  } else{
    this.tableNode.classList.remove('show-unsorted-icon');
  }
}
}

// Initialize sortable table buttons
var sortableTable
window.addEventListener('load', function (){
  sortableTable =  new SortableTable(document.querySelector('table.sortable'));
  sortableTable.setColumnHeaderSort(1);
});