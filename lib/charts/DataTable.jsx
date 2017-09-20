var DataTable=React.createClass({
    propTypes: {
        width:React.PropTypes.number,
        height:React.PropTypes.number,
        tableId:React.PropTypes.string
    },

    mixins:[resizeMixin],

    getDefaultProps: function() {
        return {
            width: 800,
            height: 300,
            chartId: 'data-table'
        };
    },
    getInitialState:function(){
        return {
            tooltip:{ display:false,data:{key:'',value:''}},
            width:800
        };
    },

    createTable:function(_self){

        d3.text("../../data/data.csv", function(datasetText) {

            var parsedCSV = d3.csv.parseRows(datasetText);

            var sampleHTML = d3.select(this.prop.tableId)
                .append("table")
                .style("border-collapse", "collapse")
                .style("border", "2px black solid")

                .selectAll("tr")
                .data(parsedCSV)
                .enter().append("tr")

                .selectAll("td")
                .data(function(d){return d;})
                .enter().append("td")
                .style("border", "1px black solid")
                .style("padding", "5px")
                .on("mouseover", function(){d3.select(this).style("background-color", "aliceblue")})
                .on("mouseout", function(){d3.select(this).style("background-color", "white")})
                .text(function(d){return d;})
                .style("font-size", "12px");
        });

    },

    render:function(){
        this.createTable(this);

        var elements;
        var _self=this;


        return (
            <div>
                {createTable}
            </div>
        );
    }

});

window.DataTable = DataTable;