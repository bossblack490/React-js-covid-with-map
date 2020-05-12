import React from "react";
import classes from "./mapBlock.module.css";
import * as am4core from "@amcharts/amcharts4/core";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";

am4core.useTheme(am4themes_animated);

class MapBlock extends React.Component {
    componentDidMount() {
        let chart = am4core.create("chartdiv", am4maps.MapChart);

        chart.geodata = am4geodata_worldLow;

        chart.projection = new am4maps.projections.Miller();

        let polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

        polygonSeries.exclude = ["AQ"];

        polygonSeries.useGeodata = true;

        let polygonTemplate = polygonSeries.mapPolygons.template;
        polygonTemplate.tooltipText = "{name}";
        polygonTemplate.polygon.fillOpacity = 0.6;

        let hs = polygonTemplate.states.create("hover");
        hs.properties.fill = chart.colors.getIndex(0);

        let imageSeries = chart.series.push(new am4maps.MapImageSeries());
        imageSeries.mapImages.template.propertyFields.longitude = "longitude";
        imageSeries.mapImages.template.propertyFields.latitude = "latitude";
        imageSeries.mapImages.template.tooltipText = "{title}";
        imageSeries.mapImages.template.propertyFields.url = "url";

        let circle = imageSeries.mapImages.template.createChild(am4core.Circle);
        circle.radius = 3;
        circle.propertyFields.fill = "color";

        let circle2 = imageSeries.mapImages.template.createChild(am4core.Circle);
        circle2.radius = 3;
        circle2.propertyFields.fill = "color";

        let colorSet = new am4core.ColorSet();

        imageSeries.data = this.props.countries.map(item => {
            return {
                "title": item.combinedKey + " | confirmed " + item.confirmed,
                "latitude": item.lat,
                "longitude": item.long,
                "color": colorSet.next()
            };
        });

        this.chart = chart;
    }

    componentWillUnmount() {
        if (this.chart) {
            this.chart.dispose();
        }
    }

    render() {
        return (
            <div id={classes.mapBlock} className="clearfix">
                <div id="chartdiv" style={{ width: "100%", height: "600px" }}></div>
            </div>
        );
    }
}

export default MapBlock;