const Database = require('./db')
const saveOrphanage = require("./saveOrphanage")

Database.then(async (db) => {
    //inserir dados na tabela

    /*
    await saveOrphanage(db, {
        lat:"-16.3603149",
        lng:"-46.9155189",
        name: "Lar dos Meninos",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "38 99900 7777",
        images: [
            "https://images.unsplash.com/photo-1601758123870-856824bb7a2e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
            
            "https://images.unsplash.com/photo-1602892743476-58f7a60ff5c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=641&q=80"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas Das 10h até 20h",
        open_on_weekends: "0"
    })  
    */

    //consultar dados na tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    //consultar somente 1 dado da tabela pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')
    //console.log(orphanage)

    //deletar um dado da tabela
    //console.log(await db.run('DELETE FROM orphanages WHERE id = "5"'))
})