var wms_layers = [];


        var lyr_Googlesatelitlitlit_0 = new ol.layer.Tile({
            'title': 'Google satelitlitlit',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_aksesibilitas_univunion_1 = new ol.format.GeoJSON();
var features_aksesibilitas_univunion_1 = format_aksesibilitas_univunion_1.readFeatures(json_aksesibilitas_univunion_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_aksesibilitas_univunion_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_aksesibilitas_univunion_1.addFeatures(features_aksesibilitas_univunion_1);
var lyr_aksesibilitas_univunion_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_aksesibilitas_univunion_1, 
                style: style_aksesibilitas_univunion_1,
                popuplayertitle: 'aksesibilitas_univ — union',
                interactive: true,
                title: '<img src="styles/legend/aksesibilitas_univunion_1.png" /> aksesibilitas_univ — union'
            });
var format_PTNdiSurabaya_2 = new ol.format.GeoJSON();
var features_PTNdiSurabaya_2 = format_PTNdiSurabaya_2.readFeatures(json_PTNdiSurabaya_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PTNdiSurabaya_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PTNdiSurabaya_2.addFeatures(features_PTNdiSurabaya_2);
var lyr_PTNdiSurabaya_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PTNdiSurabaya_2, 
                style: style_PTNdiSurabaya_2,
                popuplayertitle: 'PTN di Surabaya',
                interactive: true,
                title: '<img src="styles/legend/PTNdiSurabaya_2.png" /> PTN di Surabaya'
            });

lyr_Googlesatelitlitlit_0.setVisible(true);lyr_aksesibilitas_univunion_1.setVisible(true);lyr_PTNdiSurabaya_2.setVisible(true);
var layersList = [lyr_Googlesatelitlitlit_0,lyr_aksesibilitas_univunion_1,lyr_PTNdiSurabaya_2];
lyr_aksesibilitas_univunion_1.set('fieldAliases', {'fid': 'fid', 'Access': 'Access', });
lyr_PTNdiSurabaya_2.set('fieldAliases', {'fid': 'fid', 'Nama': 'Nama', 'Kampus': 'Kampus', 'Rank QS': 'Rank QS', 'Tahun Didirikan': 'Tahun Didirikan', 'Fakultas': 'Fakultas', 'Foto': 'Foto', });
lyr_aksesibilitas_univunion_1.set('fieldImages', {'fid': 'TextEdit', 'Access': 'TextEdit', });
lyr_PTNdiSurabaya_2.set('fieldImages', {'fid': 'TextEdit', 'Nama': 'TextEdit', 'Kampus': 'TextEdit', 'Rank QS': 'TextEdit', 'Tahun Didirikan': 'Range', 'Fakultas': 'TextEdit', 'Foto': 'ExternalResource', });
lyr_aksesibilitas_univunion_1.set('fieldLabels', {'fid': 'hidden field', 'Access': 'inline label - always visible', });
lyr_PTNdiSurabaya_2.set('fieldLabels', {'fid': 'hidden field', 'Nama': 'hidden field', 'Kampus': 'inline label - always visible', 'Rank QS': 'inline label - always visible', 'Tahun Didirikan': 'inline label - always visible', 'Fakultas': 'header label - always visible', 'Foto': 'no label', });
lyr_PTNdiSurabaya_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});