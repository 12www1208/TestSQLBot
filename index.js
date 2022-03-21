const sqlite3 = require("sqlite3")

const { Telegraf } = require("telegraf")


let db  = new sqlite3.Database('databased.db', (err) => {

	if (err) {
		console.error(err.message)
	}

	console.log("Вы родключились")

})

const Token = ""

const bot = new Telegraf(Token)

bot.start((ctx) => ctx.reply('Привет провера базы даных гачнётся'))



bot.hears('Имена', (ctx) => {

	db.all(`SELECT het FROM him`, [], (err, rows) => {

		if (err) {
			console.error(err.message)
		}

		rows.forEach((rows) => {
			console.log(rows)
			ctx.reply(rows)
		})

	})
})

bot.command('Na_Info', (ctx) => {
	db.all(`SELECT info FROM him WHERE het = "Na"`, (err, rows) => {
		if (err) {
			console.error(err.message)
		}
		rows.forEach((rows) => {
			console.log(rows)
			ctx.reply(rows)
		})
	})
})

bot.command('Al', (ctx) => {
	db.all(`SELECT info FROM him WHERE het = "Al"`, (err, rows) => {
		if (err) {
			console.error(err.message)
		}

		rows.forEach((rows) => {
			console.log(rows)
			ctx.reply(rows)
		})
	})
})

bot.launch()



