/**
 * Created by seven on 2018/6/12.
 * fighting20xx@126.com
 */

'use strict'

var http = require('http');
var cheerio = require('cheerio');
var query = require('./sql_pool');



function Spider(option) {
    this.pageSize = (option && option.pageSize)?option.pageSize:100;
	this.cb = function () {};
	this.options = {
		hostname: 'api.fangshijie.cn',
		port: 80,
		method:'get',
		path: 'http://api.fangshijie.cn/api/SellHouse/GetList?Title=&City=-1&Zone=-1&Type=-1&Decoration=-1&Price=-1&PriceOrder=&OpeningDateOrder=&PageIndex=1&PageSize='+this.pageSize,
		agent:new http.Agent({ keepAlive: true }),
		headers: {
			'Content-Type':'application/x-www-form-urlencoded',
			'Accept': '*/*',
			'Authorization': 'bearer 122mumpcFqmwjTTBKw0X5dsr6WZfM-jxbKf1KzecWVeVTUVuLxw78Cfo2u4aC_tcRv70zeZvqAWrsP4-xGzy7EnOeiQevprduzm2P1AMADd6G6Rey_a6kn6VSQVpOD9E2-4snQqYd14OgVPmSSum1AAzzwC3vXeyZufFy2BOKOeV-RTYyCB-IrWN_ob-GO0Sq04Q7eBdquUnz1NwLL2T_2DC1c4CClcjWXhOCHTMhnlOv-lqY4EWynX_PQrYEtA0',
			'Connection': 'keep-alive',
			'Host': 'api.fangshijie.cn',
			'Origin': 'http://www.fangshijie.cn',
			'Referer': 'http://www.fangshijie.cn/map/'
		},
		keepAlive:true,
		maxSockets:30
	};
}


Spider.prototype.getApiData =function (api) {
    var that = this;
    http.get(this.options, function (res) {
        res.setEncoding('utf8');
        var rawData = '';
        res.on('data', function (chunk) {
            rawData += chunk;
        });
        res.on('end', function () {
            try {
                var parsedData = JSON.parse(rawData);
                console.log(rawData);
                // that.endApi(api);
                that.handleResultList(parsedData);
            } catch (e) {
                console.error(e.message);
            }
        });
    });


};


Spider.prototype.handleResultList = function (data) {
    var that = this;
    var list = data.HouseList ;

    this.clear(); //清空数据库；
	var everyNumber = 50;
    var newList = list.slice();
    while(newList.length > everyNumber) {
        var temp = newList.slice(0,everyNumber);
        this.saveData(temp);
        newList = newList.slice(everyNumber);
    }
    this.saveData(newList,this.cb);
};
Spider.prototype.saveData = function (list,cb) {
    var that = this;

    var sql ="insert into xsfc ( ";
    var keyList = Object.keys(list[0]) ;
    keyList.forEach(function (key) {
        sql += key +' ,';
    });
    sql = sql.substring(0, sql.length-1) +" ) values ";

    var valueStr =' ';
    list.forEach(function (item) {
        valueStr += '( ';
        keyList.forEach(function (key) {
            var value = item[key];
            valueStr += "\""+value+ "\" ,";
        });
        valueStr = valueStr.substring(0, valueStr.length-1) + '),'
    });
    sql = sql+valueStr.substring(0, valueStr.length-1);

    // console.log(sql);
    query(sql,function (err,rowdata,field) {
        if(err) {
        	console.log("==> " ,err)
        }else {
			if(cb){
				cb.call(this);
			}
		}
    })
};
Spider.prototype.clear =function () {
    query("delete from xsfc",function (err,rowdata,field) {
        if(err) console.log("==> " ,err);
        console.log("clear----------------->. ");
    })
};
Spider.prototype.run =function (cb) {
	if (typeof cb === 'function') {
		this.cb = cb;
	}
	console.log('总数据长度-----》 '+this.pageSize);
    this.getApiData();
};


module.exports =  Spider;