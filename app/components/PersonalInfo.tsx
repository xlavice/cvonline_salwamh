import React from "react";

const PersonalInfo = () => {
    const myInfos = {
        ttl: "Lampung, 17 Mei 2005",
        gender: "Female",
        tinggiBadan: "159 cm",
        beratBadan: "49 kg",
        statusPernikahan: "Single",
        whatsapp: "0882-8792-2423",
        email: "salwamayhanifah17@gmail.com"
    };

    return (
        <div className="personal-info-container">
            <h2 className="section-title">Salwa Personal Info</h2>
            <div className="personal-info">
                <p><span>TTL:</span> {myInfos.ttl}</p>
                <p><span>Gender:</span> {myInfos.gender}</p>
                <p><span>Tinggi Badan:</span> {myInfos.tinggiBadan}</p>
                <p><span>Berat Badan:</span> {myInfos.beratBadan}</p>
                <p><span>Status Pernikahan:</span> {myInfos.statusPernikahan}</p>
                <p><span>WhatsApp:</span> {myInfos.whatsapp}</p>
                <p><span>Email:</span> {myInfos.email}</p>
            </div>
        </div>
    );
};

export default PersonalInfo;
