var webdriver = require('selenium-webdriver');
const assert = require('chai').assert;
var jsdom = require('mocha-jsdom')

By = webdriver.By;
until = webdriver.until;

var driver = new webdriver.Builder().forBrowser('chrome').build();


describe( 'ToDo Application' , function(){

  jsdom({
  url: `http://${"localhost"}:8080/`
  })

  this.timeout(12000);

    before(function(){
        driver.get(`http://${"localhost"}:8080/`);
      });

    beforeEach (function() {
      driver.navigate().refresh();
    })

    after(function(){
       driver.quit();
    });

    it( 'works correctly', async () => {
      let text;
      driver.sleep(500);

      await driver.wait(until.elementLocated(By.id('inputTitle')), 5000).then(function(){
          var text = driver.findElement(By.id('inputTitle'));
          text.click();
          text.sendKeys('Clean the room');
      });
      driver.sleep(500)

      await driver.wait(until.elementLocated(By.className('btn-primary')), 5000).then(function(){
        var buttonSubmit = driver.findElement(By.className('btn-primary'));
        buttonSubmit.click();
      });
      driver.sleep(500)

      await driver.wait(until.elementLocated(By.id('inputTitle')), 5000).then(function(){
          var text = driver.findElement(By.id('inputTitle'));
          text.click();
          text.clear();
          text.sendKeys('Get the groceries');
      });
      driver.sleep(500)

      await driver.wait(until.elementLocated(By.id('check1')), 5000).then(function(){
        var buttonSubmit = driver.findElement(By.id('check1'));
        buttonSubmit.click();
      });
      driver.sleep(500)

      await driver.wait(until.elementLocated(By.className('btn-primary')), 5000).then(function(){
        var buttonSubmit = driver.findElement(By.className('btn-primary'));
        buttonSubmit.click();
      });
      driver.sleep(500)

      return driver.wait(until.elementLocated(By.id('flexCheckChecked')), 5000).then(function(){
        var buttonSubmit = driver.findElement(By.id('flexCheckChecked'));
        buttonSubmit.click();
      });

    });
    
  });
  
