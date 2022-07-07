export class Tags{
    constructor(filterValue, filterType){
        this.filterValue = filterValue
        this.filterType = filterType;
        
    }

buildTag(){
    const filterList = document.querySelector('.filters-list')
    filterList.innerHTML += `
    <li class="filter-list__item filter-list__item-${this.filterType}">${this.filterValue}</li>
    
    `
}
}