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


bot.command('Na_History', (ctx) => {
	db.all(`SELECT history FROM him WHERE het = "Na"`, (err, rows)  => {
		if (err) {
			console.error(err.message)
		}
		rows.forEach((rows) => {
			console.log(rows)
			ctx.reply(rows)
		})
	})
})

bot.command('Na_Get', (ctx) => {
	db.all(`SELECT getting FROM him WHERE het = "Na"`, (err, rows) => {
		if (err) {
			console.error(err.message)
		}

		rows.forEach((rows) => {
			console.log(rows)
			ctx.reply(rows)
			ctx.reply("Na2CO3 + 2C = 2Na + 3CO")
		})
	})
})

bot.command("Na_all", (ctx) => {
	db.all(`SELECT * FROM him WHERE het = "Na"`, (err, rows) => {
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


