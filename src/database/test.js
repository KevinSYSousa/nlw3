const Database = require("./db.js");
const saveOrphanage = require("./saveOrphanage")

Database.then(async (db) => {
  //INSERT DATA
  await saveOrphanage(db, {
        lat: "-21.2409054",
        lng: "-44.9991233",
        name: "Lar das meninas",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontrem em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "88313",
        images: ["https://images.unsplash.com/photo-1567701562484-deab2750d1e8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"].toString(),
        instructions: "Veja como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas Das 8h até as 18h",
        open_on_weekends: "1"
  });

  //CHECK DATA
  const selectedOrphanages = await db.all("SELECT * FROM orphanages");
  console.log(selectedOrphanages);

  //CHECK DATA ID
  const orphanage = await db.all("SELECT * FROM orphanages WHERE id = '4'");
  console.log(orphanage);

  //DELETE DATA
  await db.run("DELETE FROM orphanages WHERE id = '4'")
});
