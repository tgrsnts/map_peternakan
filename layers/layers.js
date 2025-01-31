var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_coordinate_1 = new ol.format.GeoJSON();
var features_coordinate_1 = format_coordinate_1.readFeatures(json_coordinate_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_coordinate_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_coordinate_1.addFeatures(features_coordinate_1);
var lyr_coordinate_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_coordinate_1, 
                style: style_coordinate_1,
                popuplayertitle: 'coordinate',
                interactive: true,
                title: '<img src="styles/legend/coordinate_1.png" /> coordinate'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_coordinate_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_coordinate_1];
lyr_coordinate_1.set('fieldAliases', {'Lintang': 'Lintang', 'bujur': 'bujur', 'nama': 'nama', });
lyr_coordinate_1.set('fieldImages', {'Lintang': 'TextEdit', 'bujur': 'TextEdit', 'nama': 'TextEdit', });
lyr_coordinate_1.set('fieldLabels', {'Lintang': 'no label', 'bujur': 'no label', 'nama': 'no label', });
lyr_coordinate_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});