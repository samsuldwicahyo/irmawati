var wms_layers = [];

var format_batasdesa_0 = new ol.format.GeoJSON();
var features_batasdesa_0 = format_batasdesa_0.readFeatures(json_batasdesa_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_batasdesa_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_batasdesa_0.addFeatures(features_batasdesa_0);
var lyr_batasdesa_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_batasdesa_0, 
                style: style_batasdesa_0,
                popuplayertitle: "batas desa",
                interactive: true,
                title: '<img src="styles/legend/batasdesa_0.png" /> batas desa'
            });
var format_sungai_1 = new ol.format.GeoJSON();
var features_sungai_1 = format_sungai_1.readFeatures(json_sungai_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sungai_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sungai_1.addFeatures(features_sungai_1);
var lyr_sungai_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sungai_1, 
                style: style_sungai_1,
                popuplayertitle: "sungai",
                interactive: true,
                title: '<img src="styles/legend/sungai_1.png" /> sungai'
            });
var format_wilayahrtrw_2 = new ol.format.GeoJSON();
var features_wilayahrtrw_2 = format_wilayahrtrw_2.readFeatures(json_wilayahrtrw_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_wilayahrtrw_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_wilayahrtrw_2.addFeatures(features_wilayahrtrw_2);
var lyr_wilayahrtrw_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_wilayahrtrw_2, 
                style: style_wilayahrtrw_2,
                popuplayertitle: "wilayah rt rw",
                interactive: true,
                title: '<img src="styles/legend/wilayahrtrw_2.png" /> wilayah rt rw'
            });
var format_bangunan_3 = new ol.format.GeoJSON();
var features_bangunan_3 = format_bangunan_3.readFeatures(json_bangunan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bangunan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bangunan_3.addFeatures(features_bangunan_3);
var lyr_bangunan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bangunan_3, 
                style: style_bangunan_3,
                popuplayertitle: "bangunan",
                interactive: true,
                title: '<img src="styles/legend/bangunan_3.png" /> bangunan'
            });
var format_fasilitasdesa_4 = new ol.format.GeoJSON();
var features_fasilitasdesa_4 = format_fasilitasdesa_4.readFeatures(json_fasilitasdesa_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_fasilitasdesa_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fasilitasdesa_4.addFeatures(features_fasilitasdesa_4);
var lyr_fasilitasdesa_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_fasilitasdesa_4, 
                style: style_fasilitasdesa_4,
                popuplayertitle: "fasilitas desa",
                interactive: true,
    title: 'fasilitas desa<br />\
    <img src="styles/legend/fasilitasdesa_4_0.png" /> Balai Desa Kalialang<br />\
    <img src="styles/legend/fasilitasdesa_4_1.png" /> Balai Pertemuan Mardilayon<br />\
    <img src="styles/legend/fasilitasdesa_4_2.png" /> Gereja Khatolik St. Yusup Kalialang<br />\
    <img src="styles/legend/fasilitasdesa_4_3.png" /> Kuburan Desa Kalialang<br />\
    <img src="styles/legend/fasilitasdesa_4_4.png" /> Lapangan Desa Kalialang<br />\
    <img src="styles/legend/fasilitasdesa_4_5.png" /> Lumbung Padi Mardilayon RW 02<br />\
    <img src="styles/legend/fasilitasdesa_4_6.png" /> Masjid Al Ikhlas<br />\
    <img src="styles/legend/fasilitasdesa_4_7.png" /> Masjid Al Islam<br />\
    <img src="styles/legend/fasilitasdesa_4_8.png" /> Masjid An Nur<br />\
    <img src="styles/legend/fasilitasdesa_4_9.png" /> Masjid At Taqwa<br />\
    <img src="styles/legend/fasilitasdesa_4_10.png" /> Mushola Al Hidayah<br />\
    <img src="styles/legend/fasilitasdesa_4_11.png" /> Mushola Al Mutaqqin<br />\
    <img src="styles/legend/fasilitasdesa_4_12.png" /> Musholla At Taufiq<br />\
    <img src="styles/legend/fasilitasdesa_4_13.png" /> PAUD Cahaya Ilmu<br />\
    <img src="styles/legend/fasilitasdesa_4_14.png" /> PUSKESMAS Desa Kalialang<br />\
    <img src="styles/legend/fasilitasdesa_4_15.png" /> SD Negeri 1 Kalialang<br />\
    <img src="styles/legend/fasilitasdesa_4_16.png" /> SD Negeri 2 Kalialang<br />\
    <img src="styles/legend/fasilitasdesa_4_17.png" /> <br />'
        });
var format_ADMINISTRASIDESA_5 = new ol.format.GeoJSON();
var features_ADMINISTRASIDESA_5 = format_ADMINISTRASIDESA_5.readFeatures(json_ADMINISTRASIDESA_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIDESA_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIDESA_5.addFeatures(features_ADMINISTRASIDESA_5);
var lyr_ADMINISTRASIDESA_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASIDESA_5, 
                style: style_ADMINISTRASIDESA_5,
                popuplayertitle: "ADMINISTRASI DESA",
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASIDESA_5.png" /> ADMINISTRASI DESA'
            });
var format_jalandesakalialang_6 = new ol.format.GeoJSON();
var features_jalandesakalialang_6 = format_jalandesakalialang_6.readFeatures(json_jalandesakalialang_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalandesakalialang_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalandesakalialang_6.addFeatures(features_jalandesakalialang_6);
var lyr_jalandesakalialang_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalandesakalialang_6, 
                style: style_jalandesakalialang_6,
                popuplayertitle: "jalan desa kalialang",
                interactive: true,
    title: 'jalan desa kalialang<br />\
    <img src="styles/legend/jalandesakalialang_6_0.png" /> Jalan Pramuka<br />\
    <img src="styles/legend/jalandesakalialang_6_1.png" /> Jalan Perwira<br />\
    <img src="styles/legend/jalandesakalialang_6_2.png" /> Jalan Pemuda<br />\
    <img src="styles/legend/jalandesakalialang_6_3.png" /> Jalan Beji<br />\
    <img src="styles/legend/jalandesakalialang_6_4.png" /> Jalan Bangkit<br />\
    <img src="styles/legend/jalandesakalialang_6_5.png" /> <br />\
    <img src="styles/legend/jalandesakalialang_6_6.png" /> Jalan  Buntu<br />'
        });
var format_gangdesakalialang_7 = new ol.format.GeoJSON();
var features_gangdesakalialang_7 = format_gangdesakalialang_7.readFeatures(json_gangdesakalialang_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gangdesakalialang_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gangdesakalialang_7.addFeatures(features_gangdesakalialang_7);
var lyr_gangdesakalialang_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_gangdesakalialang_7, 
                style: style_gangdesakalialang_7,
                popuplayertitle: "gang desa kalialang",
                interactive: true,
                title: '<img src="styles/legend/gangdesakalialang_7.png" /> gang desa kalialang'
            });

lyr_batasdesa_0.setVisible(true);lyr_sungai_1.setVisible(true);lyr_wilayahrtrw_2.setVisible(true);lyr_bangunan_3.setVisible(true);lyr_fasilitasdesa_4.setVisible(true);lyr_ADMINISTRASIDESA_5.setVisible(true);lyr_jalandesakalialang_6.setVisible(true);lyr_gangdesakalialang_7.setVisible(true);
var layersList = [lyr_batasdesa_0,lyr_sungai_1,lyr_wilayahrtrw_2,lyr_bangunan_3,lyr_fasilitasdesa_4,lyr_ADMINISTRASIDESA_5,lyr_jalandesakalialang_6,lyr_gangdesakalialang_7];
lyr_batasdesa_0.set('fieldAliases', {'id': 'id', 'rw': 'rw', 'rt': 'rt', });
lyr_sungai_1.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_wilayahrtrw_2.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_bangunan_3.set('fieldAliases', {'id': 'id', });
lyr_fasilitasdesa_4.set('fieldAliases', {'id': 'id', 'No': 'No', 'Nama': 'Nama', });
lyr_ADMINISTRASIDESA_5.set('fieldAliases', {'id': 'id', 'NAMA': 'NAMA', });
lyr_jalandesakalialang_6.set('fieldAliases', {'id': 'id', 'Jalan': 'Jalan', });
lyr_gangdesakalialang_7.set('fieldAliases', {'id': 'id', 'jalan gang': 'jalan gang', });
lyr_batasdesa_0.set('fieldImages', {'id': 'TextEdit', 'rw': 'TextEdit', 'rt': 'TextEdit', });
lyr_sungai_1.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_wilayahrtrw_2.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_bangunan_3.set('fieldImages', {'id': '', });
lyr_fasilitasdesa_4.set('fieldImages', {'id': 'TextEdit', 'No': 'TextEdit', 'Nama': 'TextEdit', });
lyr_ADMINISTRASIDESA_5.set('fieldImages', {'id': 'TextEdit', 'NAMA': 'TextEdit', });
lyr_jalandesakalialang_6.set('fieldImages', {'id': 'TextEdit', 'Jalan': 'TextEdit', });
lyr_gangdesakalialang_7.set('fieldImages', {'id': 'TextEdit', 'jalan gang': 'TextEdit', });
lyr_batasdesa_0.set('fieldLabels', {'id': 'no label', 'rw': 'no label', 'rt': 'no label', });
lyr_sungai_1.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_wilayahrtrw_2.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_bangunan_3.set('fieldLabels', {'id': 'no label', });
lyr_fasilitasdesa_4.set('fieldLabels', {'id': 'no label', 'No': 'no label', 'Nama': 'no label', });
lyr_ADMINISTRASIDESA_5.set('fieldLabels', {'id': 'no label', 'NAMA': 'no label', });
lyr_jalandesakalialang_6.set('fieldLabels', {'id': 'no label', 'Jalan': 'no label', });
lyr_gangdesakalialang_7.set('fieldLabels', {'id': 'no label', 'jalan gang': 'no label', });
lyr_gangdesakalialang_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});