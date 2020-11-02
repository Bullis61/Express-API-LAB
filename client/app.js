let getChirps = () => {
    return $.get("/server/chirpstore/", data => {
        let chirpArray = Object.keys(data).map(chirpID => {
            let chirp = data[chirpID];
            chirp.id = chirpID;
            return chirp;
        })
    })
}