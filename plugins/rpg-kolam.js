let handler = async (m, { conn, usedPrefix }) => {
	let user = global.db.data.users[m.sender]
	let gmbrt = 'https://telegra.ph/file/4a2dad6f0f6dfef650bf3.jpg'
	let hsl = `*━━━━━ [ Kolam Ikan ] ━━━━━*

*🐋 = [ ${user.orca} ] orca*
*🐳 = [ ${user.paus} ] paus*
*🐬 = [ ${user.lumba} ] lumba*
*🦈 = [ ${user.hiu} ] hiu*
*🐟 = [ ${user.ikan} ] ikan*
*🐟 = [ ${user.lele} ] lele*
*🐡 = [ ${user.bawal} ] bawal*
*🐠 = [ ${user.nila} ] nila*
*🦀 = [ ${user.kepiting} ] kepiting*
*🦞 = [ ${user.lobster} ] lobster*
*🐙 = [ ${user.gurita} ] gurita*
*🦑 = [ ${user.cumi} ] cumi*
*🦐 = [ ${user.udang} ] udang*

Gunakan *${usedPrefix}sell* untuk dijual atau *${usedPrefix}cook* untuk dijadikan bahan masakan.`

	conn.sendFile(m.chat, gmbrt, `kolam.jpg`, hsl, m)
}

handler.menufun = ['kolam']
handler.tagsfun = ['rpg']
handler.command = /^(kolam)$/i

export default handler