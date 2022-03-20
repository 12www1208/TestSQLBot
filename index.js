const sqlite3 = require("sqlite3")

const { Telegraf } = require("telegraf")


let db  = new sqlite3.Database('databased', (err) => {

	if (err) {
		console.error(err.message)
	}

	console.log("Вы родключились")

})

const bot = new Telegraf(Token.Bot)

bot.start((ctx) => ctx.reply('Привет провера базы даных гачнётся'))



bot.hears('Имена', (ctx) => {

	db.all(`SELECT * FROM users`, [], (err, rows) => {

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



