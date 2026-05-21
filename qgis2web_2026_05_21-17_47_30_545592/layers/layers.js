var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Intersectionkelurahan_1 = new ol.format.GeoJSON();
var features_Intersectionkelurahan_1 = format_Intersectionkelurahan_1.readFeatures(json_Intersectionkelurahan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Intersectionkelurahan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Intersectionkelurahan_1.addFeatures(features_Intersectionkelurahan_1);
var lyr_Intersectionkelurahan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Intersectionkelurahan_1, 
                style: style_Intersectionkelurahan_1,
                popuplayertitle: 'Intersection kelurahan',
                interactive: true,
                title: '<img src="styles/legend/Intersectionkelurahan_1.png" /> Intersection kelurahan'
            });
var format_halte_pt_2 = new ol.format.GeoJSON();
var features_halte_pt_2 = format_halte_pt_2.readFeatures(json_halte_pt_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_halte_pt_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_halte_pt_2.addFeatures(features_halte_pt_2);
var lyr_halte_pt_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_halte_pt_2, 
                style: style_halte_pt_2,
                popuplayertitle: 'halte_pt',
                interactive: true,
                title: '<img src="styles/legend/halte_pt_2.png" /> halte_pt'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Intersectionkelurahan_1.setVisible(true);lyr_halte_pt_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Intersectionkelurahan_1,lyr_halte_pt_2];
lyr_Intersectionkelurahan_1.set('fieldAliases', {'full_id': 'full_id', 'Kecamatan': 'Kecamatan', 'Kelurahan': 'Kelurahan', 'luas1': 'luas1', 'Nama_Halte': 'Nama_Halte', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', 'type': 'type', 'start': 'start', 'luas_jangkau': 'luas_jangkau', 'luasha': 'luasha', });
lyr_halte_pt_2.set('fieldAliases', {'Nama_Halte': 'Nama_Halte', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', });
lyr_Intersectionkelurahan_1.set('fieldImages', {'full_id': 'TextEdit', 'Kecamatan': 'TextEdit', 'Kelurahan': 'TextEdit', 'luas1': 'TextEdit', 'Nama_Halte': 'TextEdit', 'Keterangan': 'TextEdit', 'Sumber': 'TextEdit', 'type': 'TextEdit', 'start': 'TextEdit', 'luas_jangkau': 'TextEdit', 'luasha': 'Range', });
lyr_halte_pt_2.set('fieldImages', {'Nama_Halte': 'TextEdit', 'Keterangan': 'TextEdit', 'Sumber': 'TextEdit', });
lyr_Intersectionkelurahan_1.set('fieldLabels', {'full_id': 'hidden field', 'Kecamatan': 'inline label - always visible', 'Kelurahan': 'inline label - always visible', 'luas1': 'no label', 'Nama_Halte': 'hidden field', 'Keterangan': 'hidden field', 'Sumber': 'hidden field', 'type': 'hidden field', 'start': 'hidden field', 'luas_jangkau': 'hidden field', 'luasha': 'inline label - always visible', });
lyr_halte_pt_2.set('fieldLabels', {'Nama_Halte': 'inline label - always visible', 'Keterangan': 'inline label - always visible', 'Sumber': 'inline label - always visible', });
lyr_halte_pt_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});