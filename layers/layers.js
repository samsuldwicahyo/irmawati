var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ADMINISTRASIDESA_AR_25K_1 = new ol.format.GeoJSON();
var features_ADMINISTRASIDESA_AR_25K_1 = format_ADMINISTRASIDESA_AR_25K_1.readFeatures(json_ADMINISTRASIDESA_AR_25K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIDESA_AR_25K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIDESA_AR_25K_1.addFeatures(features_ADMINISTRASIDESA_AR_25K_1);
var lyr_ADMINISTRASIDESA_AR_25K_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASIDESA_AR_25K_1, 
                style: style_ADMINISTRASIDESA_AR_25K_1,
                popuplayertitle: "ADMINISTRASIDESA_AR_25K",
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASIDESA_AR_25K_1.png" /> ADMINISTRASIDESA_AR_25K'
            });
var format_AGRISAWAH_AR_25K_2 = new ol.format.GeoJSON();
var features_AGRISAWAH_AR_25K_2 = format_AGRISAWAH_AR_25K_2.readFeatures(json_AGRISAWAH_AR_25K_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AGRISAWAH_AR_25K_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AGRISAWAH_AR_25K_2.addFeatures(features_AGRISAWAH_AR_25K_2);
var lyr_AGRISAWAH_AR_25K_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AGRISAWAH_AR_25K_2, 
                style: style_AGRISAWAH_AR_25K_2,
                popuplayertitle: "AGRISAWAH_AR_25K",
                interactive: true,
                title: '<img src="styles/legend/AGRISAWAH_AR_25K_2.png" /> AGRISAWAH_AR_25K'
            });
var format_PEMUKIMAN_AR_25K_3 = new ol.format.GeoJSON();
var features_PEMUKIMAN_AR_25K_3 = format_PEMUKIMAN_AR_25K_3.readFeatures(json_PEMUKIMAN_AR_25K_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEMUKIMAN_AR_25K_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMUKIMAN_AR_25K_3.addFeatures(features_PEMUKIMAN_AR_25K_3);
var lyr_PEMUKIMAN_AR_25K_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PEMUKIMAN_AR_25K_3, 
                style: style_PEMUKIMAN_AR_25K_3,
                popuplayertitle: "PEMUKIMAN_AR_25K",
                interactive: true,
                title: '<img src="styles/legend/PEMUKIMAN_AR_25K_3.png" /> PEMUKIMAN_AR_25K'
            });
var format_SARANAIBADAH_PT_25K_4 = new ol.format.GeoJSON();
var features_SARANAIBADAH_PT_25K_4 = format_SARANAIBADAH_PT_25K_4.readFeatures(json_SARANAIBADAH_PT_25K_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SARANAIBADAH_PT_25K_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SARANAIBADAH_PT_25K_4.addFeatures(features_SARANAIBADAH_PT_25K_4);
var lyr_SARANAIBADAH_PT_25K_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SARANAIBADAH_PT_25K_4, 
                style: style_SARANAIBADAH_PT_25K_4,
                popuplayertitle: "SARANAIBADAH_PT_25K",
                interactive: true,
                title: '<img src="styles/legend/SARANAIBADAH_PT_25K_4.png" /> SARANAIBADAH_PT_25K'
            });
var format_PENDIDIKAN_PT_25K_5 = new ol.format.GeoJSON();
var features_PENDIDIKAN_PT_25K_5 = format_PENDIDIKAN_PT_25K_5.readFeatures(json_PENDIDIKAN_PT_25K_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PENDIDIKAN_PT_25K_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PENDIDIKAN_PT_25K_5.addFeatures(features_PENDIDIKAN_PT_25K_5);
var lyr_PENDIDIKAN_PT_25K_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PENDIDIKAN_PT_25K_5, 
                style: style_PENDIDIKAN_PT_25K_5,
                popuplayertitle: "PENDIDIKAN_PT_25K",
                interactive: true,
                title: '<img src="styles/legend/PENDIDIKAN_PT_25K_5.png" /> PENDIDIKAN_PT_25K'
            });
var format_PEMERINTAHAN_PT_25K_6 = new ol.format.GeoJSON();
var features_PEMERINTAHAN_PT_25K_6 = format_PEMERINTAHAN_PT_25K_6.readFeatures(json_PEMERINTAHAN_PT_25K_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEMERINTAHAN_PT_25K_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMERINTAHAN_PT_25K_6.addFeatures(features_PEMERINTAHAN_PT_25K_6);
var lyr_PEMERINTAHAN_PT_25K_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PEMERINTAHAN_PT_25K_6, 
                style: style_PEMERINTAHAN_PT_25K_6,
                popuplayertitle: "PEMERINTAHAN_PT_25K",
                interactive: true,
                title: '<img src="styles/legend/PEMERINTAHAN_PT_25K_6.png" /> PEMERINTAHAN_PT_25K'
            });
var format_kalialang_poly_7 = new ol.format.GeoJSON();
var features_kalialang_poly_7 = format_kalialang_poly_7.readFeatures(json_kalialang_poly_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kalialang_poly_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kalialang_poly_7.addFeatures(features_kalialang_poly_7);
var lyr_kalialang_poly_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kalialang_poly_7, 
                style: style_kalialang_poly_7,
                popuplayertitle: "kalialang_poly",
                interactive: true,
                title: '<img src="styles/legend/kalialang_poly_7.png" /> kalialang_poly'
            });
var format_kalialang_line_8 = new ol.format.GeoJSON();
var features_kalialang_line_8 = format_kalialang_line_8.readFeatures(json_kalialang_line_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kalialang_line_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kalialang_line_8.addFeatures(features_kalialang_line_8);
var lyr_kalialang_line_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kalialang_line_8, 
                style: style_kalialang_line_8,
                popuplayertitle: "kalialang_line",
                interactive: true,
                title: '<img src="styles/legend/kalialang_line_8.png" /> kalialang_line'
            });
var format_kalialang_point_9 = new ol.format.GeoJSON();
var features_kalialang_point_9 = format_kalialang_point_9.readFeatures(json_kalialang_point_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kalialang_point_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kalialang_point_9.addFeatures(features_kalialang_point_9);
var lyr_kalialang_point_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kalialang_point_9, 
                style: style_kalialang_point_9,
                popuplayertitle: "kalialang_point",
                interactive: true,
                title: '<img src="styles/legend/kalialang_point_9.png" /> kalialang_point'
            });
var format_ADMINISTRASIDESA_AR_25Kcopy_10 = new ol.format.GeoJSON();
var features_ADMINISTRASIDESA_AR_25Kcopy_10 = format_ADMINISTRASIDESA_AR_25Kcopy_10.readFeatures(json_ADMINISTRASIDESA_AR_25Kcopy_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIDESA_AR_25Kcopy_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIDESA_AR_25Kcopy_10.addFeatures(features_ADMINISTRASIDESA_AR_25Kcopy_10);
var lyr_ADMINISTRASIDESA_AR_25Kcopy_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASIDESA_AR_25Kcopy_10, 
                style: style_ADMINISTRASIDESA_AR_25Kcopy_10,
                popuplayertitle: "ADMINISTRASIDESA_AR_25K copy",
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASIDESA_AR_25Kcopy_10.png" /> ADMINISTRASIDESA_AR_25K copy'
            });
var format_kesehatan_11 = new ol.format.GeoJSON();
var features_kesehatan_11 = format_kesehatan_11.readFeatures(json_kesehatan_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kesehatan_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kesehatan_11.addFeatures(features_kesehatan_11);
var lyr_kesehatan_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kesehatan_11, 
                style: style_kesehatan_11,
                popuplayertitle: "kesehatan",
                interactive: true,
                title: '<img src="styles/legend/kesehatan_11.png" /> kesehatan'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_ADMINISTRASIDESA_AR_25K_1.setVisible(true);lyr_AGRISAWAH_AR_25K_2.setVisible(true);lyr_PEMUKIMAN_AR_25K_3.setVisible(true);lyr_SARANAIBADAH_PT_25K_4.setVisible(true);lyr_PENDIDIKAN_PT_25K_5.setVisible(true);lyr_PEMERINTAHAN_PT_25K_6.setVisible(true);lyr_kalialang_poly_7.setVisible(true);lyr_kalialang_line_8.setVisible(true);lyr_kalialang_point_9.setVisible(true);lyr_ADMINISTRASIDESA_AR_25Kcopy_10.setVisible(true);lyr_kesehatan_11.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ADMINISTRASIDESA_AR_25K_1,lyr_AGRISAWAH_AR_25K_2,lyr_PEMUKIMAN_AR_25K_3,lyr_SARANAIBADAH_PT_25K_4,lyr_PENDIDIKAN_PT_25K_5,lyr_PEMERINTAHAN_PT_25K_6,lyr_kalialang_poly_7,lyr_kalialang_line_8,lyr_kalialang_point_9,lyr_ADMINISTRASIDESA_AR_25Kcopy_10,lyr_kesehatan_11];
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'NAMA': 'NAMA', });
lyr_AGRISAWAH_AR_25K_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSSWH': 'JNSSWH', 'FCODE': 'FCODE', 'AQDATE': 'AQDATE', 'PUDATE': 'PUDATE', 'REMARK': 'REMARK', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'TNMSWH': 'TNMSWH', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_PEMUKIMAN_AR_25K_3.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_SARANAIBADAH_PT_25K_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'FGSIBD': 'FGSIBD', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_PENDIDIKAN_PT_25K_5.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'KATPDK': 'KATPDK', 'JLPDDK': 'JLPDDK', 'FGGPDK': 'FGGPDK', 'REMARK': 'REMARK', 'FCODE': 'FCODE', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'JJGPDF': 'JJGPDF', 'JNSPDL': 'JNSPDL', });
lyr_PEMERINTAHAN_PT_25K_6.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FGSGOV': 'FGSGOV', 'LUAS': 'LUAS', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_kalialang_poly_7.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'layer': 'layer', 'tourism': 'tourism', 'tunnel': 'tunnel', 'office': 'office', 'man_made': 'man_made', 'aeroway': 'aeroway', 'capacity': 'capacity', 'parking': 'parking', 'roof_mater': 'roof_mater', 'addr_house': 'addr_house', 'width': 'width', 'military': 'military', 'covered': 'covered', 'building': 'building', 'operator': 'operator', 'natural': 'natural', 'access_roo': 'access_roo', 'beds': 'beds', 'shop': 'shop', 'building_m': 'building_m', 'oneway': 'oneway', 'opening_ho': 'opening_ho', 'waterway': 'waterway', 'smoothness': 'smoothness', 'railway': 'railway', 'depth': 'depth', 'blockage': 'blockage', 'name': 'name', 'government': 'government', 'bridge': 'bridge', 'rooms': 'rooms', 'pump': 'pump', 'addr_stree': 'addr_stree', 'landuse': 'landuse', 'amenity': 'amenity', 'barrier': 'barrier', 'highway': 'highway', 'surface': 'surface', 'diameter': 'diameter', 'water': 'water', 'public_tra': 'public_tra', });
lyr_kalialang_line_8.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'layer': 'layer', 'tunnel': 'tunnel', 'man_made': 'man_made', 'aeroway': 'aeroway', 'capacity': 'capacity', 'parking': 'parking', 'width': 'width', 'covered': 'covered', 'building': 'building', 'operator': 'operator', 'natural': 'natural', 'waterway': 'waterway', 'oneway': 'oneway', 'smoothness': 'smoothness', 'railway': 'railway', 'depth': 'depth', 'blockage': 'blockage', 'name': 'name', 'bridge': 'bridge', 'pump': 'pump', 'landuse': 'landuse', 'amenity': 'amenity', 'barrier': 'barrier', 'highway': 'highway', 'surface': 'surface', 'diameter': 'diameter', 'water': 'water', 'public_tra': 'public_tra', 'nama': 'nama', });
lyr_kalialang_point_9.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'layer': 'layer', 'tourism': 'tourism', 'tunnel': 'tunnel', 'office': 'office', 'man_made': 'man_made', 'aeroway': 'aeroway', 'capacity': 'capacity', 'parking': 'parking', 'roof_mater': 'roof_mater', 'addr_house': 'addr_house', 'width': 'width', 'military': 'military', 'covered': 'covered', 'building': 'building', 'operator': 'operator', 'natural': 'natural', 'access_roo': 'access_roo', 'beds': 'beds', 'shop': 'shop', 'building_m': 'building_m', 'oneway': 'oneway', 'opening_ho': 'opening_ho', 'waterway': 'waterway', 'smoothness': 'smoothness', 'railway': 'railway', 'depth': 'depth', 'blockage': 'blockage', 'name': 'name', 'government': 'government', 'bridge': 'bridge', 'rooms': 'rooms', 'pump': 'pump', 'addr_stree': 'addr_stree', 'landuse': 'landuse', 'amenity': 'amenity', 'barrier': 'barrier', 'highway': 'highway', 'surface': 'surface', 'diameter': 'diameter', 'water': 'water', 'public_tra': 'public_tra', });
lyr_ADMINISTRASIDESA_AR_25Kcopy_10.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'NAMA': 'NAMA', });
lyr_kesehatan_11.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'NAMA': 'TextEdit', });
lyr_AGRISAWAH_AR_25K_2.set('fieldImages', {'NAMOBJ': 'TextEdit', 'JNSSWH': 'TextEdit', 'FCODE': 'TextEdit', 'AQDATE': 'DateTime', 'PUDATE': 'DateTime', 'REMARK': 'TextEdit', 'KODLCO': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'TNMSWH': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_PEMUKIMAN_AR_25K_3.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_SARANAIBADAH_PT_25K_4.set('fieldImages', {'NAMOBJ': 'TextEdit', 'LUAS': 'TextEdit', 'FGSIBD': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', });
lyr_PENDIDIKAN_PT_25K_5.set('fieldImages', {'NAMOBJ': 'TextEdit', 'LUAS': 'TextEdit', 'KATPDK': 'TextEdit', 'JLPDDK': 'TextEdit', 'FGGPDK': 'TextEdit', 'REMARK': 'TextEdit', 'FCODE': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'JJGPDF': 'TextEdit', 'JNSPDL': 'TextEdit', });
lyr_PEMERINTAHAN_PT_25K_6.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FGSGOV': 'TextEdit', 'LUAS': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', });
lyr_kalialang_poly_7.set('fieldImages', {'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'layer': 'TextEdit', 'tourism': 'TextEdit', 'tunnel': 'TextEdit', 'office': 'TextEdit', 'man_made': 'TextEdit', 'aeroway': 'TextEdit', 'capacity': 'TextEdit', 'parking': 'TextEdit', 'roof_mater': 'TextEdit', 'addr_house': 'TextEdit', 'width': 'TextEdit', 'military': 'TextEdit', 'covered': 'TextEdit', 'building': 'TextEdit', 'operator': 'TextEdit', 'natural': 'TextEdit', 'access_roo': 'TextEdit', 'beds': 'TextEdit', 'shop': 'TextEdit', 'building_m': 'TextEdit', 'oneway': 'TextEdit', 'opening_ho': 'TextEdit', 'waterway': 'TextEdit', 'smoothness': 'TextEdit', 'railway': 'TextEdit', 'depth': 'TextEdit', 'blockage': 'TextEdit', 'name': 'TextEdit', 'government': 'TextEdit', 'bridge': 'TextEdit', 'rooms': 'TextEdit', 'pump': 'TextEdit', 'addr_stree': 'TextEdit', 'landuse': 'TextEdit', 'amenity': 'TextEdit', 'barrier': 'TextEdit', 'highway': 'TextEdit', 'surface': 'TextEdit', 'diameter': 'TextEdit', 'water': 'TextEdit', 'public_tra': 'TextEdit', });
lyr_kalialang_line_8.set('fieldImages', {'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'layer': 'TextEdit', 'tunnel': 'TextEdit', 'man_made': 'TextEdit', 'aeroway': 'TextEdit', 'capacity': 'TextEdit', 'parking': 'TextEdit', 'width': 'TextEdit', 'covered': 'TextEdit', 'building': 'TextEdit', 'operator': 'TextEdit', 'natural': 'TextEdit', 'waterway': 'TextEdit', 'oneway': 'TextEdit', 'smoothness': 'TextEdit', 'railway': 'TextEdit', 'depth': 'TextEdit', 'blockage': 'TextEdit', 'name': 'TextEdit', 'bridge': 'TextEdit', 'pump': 'TextEdit', 'landuse': 'TextEdit', 'amenity': 'TextEdit', 'barrier': 'TextEdit', 'highway': 'TextEdit', 'surface': 'TextEdit', 'diameter': 'TextEdit', 'water': 'TextEdit', 'public_tra': 'TextEdit', 'nama': 'TextEdit', });
lyr_kalialang_point_9.set('fieldImages', {'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'layer': 'TextEdit', 'tourism': 'TextEdit', 'tunnel': 'TextEdit', 'office': 'TextEdit', 'man_made': 'TextEdit', 'aeroway': 'TextEdit', 'capacity': 'TextEdit', 'parking': 'TextEdit', 'roof_mater': 'TextEdit', 'addr_house': 'TextEdit', 'width': 'TextEdit', 'military': 'TextEdit', 'covered': 'TextEdit', 'building': 'TextEdit', 'operator': 'TextEdit', 'natural': 'TextEdit', 'access_roo': 'TextEdit', 'beds': 'TextEdit', 'shop': 'TextEdit', 'building_m': 'TextEdit', 'oneway': 'TextEdit', 'opening_ho': 'TextEdit', 'waterway': 'TextEdit', 'smoothness': 'TextEdit', 'railway': 'TextEdit', 'depth': 'TextEdit', 'blockage': 'TextEdit', 'name': 'TextEdit', 'government': 'TextEdit', 'bridge': 'TextEdit', 'rooms': 'TextEdit', 'pump': 'TextEdit', 'addr_stree': 'TextEdit', 'landuse': 'TextEdit', 'amenity': 'TextEdit', 'barrier': 'TextEdit', 'highway': 'TextEdit', 'surface': 'TextEdit', 'diameter': 'TextEdit', 'water': 'TextEdit', 'public_tra': 'TextEdit', });
lyr_ADMINISTRASIDESA_AR_25Kcopy_10.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'NAMA': 'Range', });
lyr_kesehatan_11.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'NAMA': 'no label', });
lyr_AGRISAWAH_AR_25K_2.set('fieldLabels', {'NAMOBJ': 'no label', 'JNSSWH': 'no label', 'FCODE': 'no label', 'AQDATE': 'no label', 'PUDATE': 'no label', 'REMARK': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'TNMSWH': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_PEMUKIMAN_AR_25K_3.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_SARANAIBADAH_PT_25K_4.set('fieldLabels', {'NAMOBJ': 'no label', 'LUAS': 'no label', 'FGSIBD': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_PENDIDIKAN_PT_25K_5.set('fieldLabels', {'NAMOBJ': 'no label', 'LUAS': 'no label', 'KATPDK': 'no label', 'JLPDDK': 'no label', 'FGGPDK': 'no label', 'REMARK': 'no label', 'FCODE': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'JJGPDF': 'no label', 'JNSPDL': 'no label', });
lyr_PEMERINTAHAN_PT_25K_6.set('fieldLabels', {'NAMOBJ': 'no label', 'FGSGOV': 'no label', 'LUAS': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_kalialang_poly_7.set('fieldLabels', {'osm_id': 'no label', 'osm_type': 'no label', 'layer': 'no label', 'tourism': 'no label', 'tunnel': 'no label', 'office': 'no label', 'man_made': 'no label', 'aeroway': 'no label', 'capacity': 'no label', 'parking': 'no label', 'roof_mater': 'no label', 'addr_house': 'no label', 'width': 'no label', 'military': 'no label', 'covered': 'no label', 'building': 'no label', 'operator': 'no label', 'natural': 'no label', 'access_roo': 'no label', 'beds': 'no label', 'shop': 'no label', 'building_m': 'no label', 'oneway': 'no label', 'opening_ho': 'no label', 'waterway': 'no label', 'smoothness': 'no label', 'railway': 'no label', 'depth': 'no label', 'blockage': 'no label', 'name': 'no label', 'government': 'no label', 'bridge': 'no label', 'rooms': 'no label', 'pump': 'no label', 'addr_stree': 'no label', 'landuse': 'no label', 'amenity': 'no label', 'barrier': 'no label', 'highway': 'no label', 'surface': 'no label', 'diameter': 'no label', 'water': 'no label', 'public_tra': 'no label', });
lyr_kalialang_line_8.set('fieldLabels', {'osm_id': 'no label', 'osm_type': 'no label', 'layer': 'no label', 'tunnel': 'no label', 'man_made': 'no label', 'aeroway': 'no label', 'capacity': 'no label', 'parking': 'no label', 'width': 'no label', 'covered': 'no label', 'building': 'no label', 'operator': 'no label', 'natural': 'no label', 'waterway': 'no label', 'oneway': 'no label', 'smoothness': 'no label', 'railway': 'no label', 'depth': 'no label', 'blockage': 'no label', 'name': 'no label', 'bridge': 'no label', 'pump': 'no label', 'landuse': 'no label', 'amenity': 'no label', 'barrier': 'no label', 'highway': 'no label', 'surface': 'no label', 'diameter': 'no label', 'water': 'no label', 'public_tra': 'no label', 'nama': 'no label', });
lyr_kalialang_point_9.set('fieldLabels', {'osm_id': 'no label', 'osm_type': 'no label', 'layer': 'no label', 'tourism': 'no label', 'tunnel': 'no label', 'office': 'no label', 'man_made': 'no label', 'aeroway': 'no label', 'capacity': 'no label', 'parking': 'no label', 'roof_mater': 'no label', 'addr_house': 'no label', 'width': 'no label', 'military': 'no label', 'covered': 'no label', 'building': 'no label', 'operator': 'no label', 'natural': 'no label', 'access_roo': 'no label', 'beds': 'no label', 'shop': 'no label', 'building_m': 'no label', 'oneway': 'no label', 'opening_ho': 'no label', 'waterway': 'no label', 'smoothness': 'no label', 'railway': 'no label', 'depth': 'no label', 'blockage': 'no label', 'name': 'no label', 'government': 'no label', 'bridge': 'no label', 'rooms': 'no label', 'pump': 'no label', 'addr_stree': 'no label', 'landuse': 'no label', 'amenity': 'no label', 'barrier': 'no label', 'highway': 'no label', 'surface': 'no label', 'diameter': 'no label', 'water': 'no label', 'public_tra': 'no label', });
lyr_ADMINISTRASIDESA_AR_25Kcopy_10.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'NAMA': 'no label', });
lyr_kesehatan_11.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_kesehatan_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});