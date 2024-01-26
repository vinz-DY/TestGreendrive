import React from "react";
import "./Faq.css";

function Faq() {
  return (
    <div className="faq-container">
      <h1 className="title-faq">La FAQ de GreenDrive</h1>
      <div className="questions-container">
        <h2 className="subtitle-faq">QUESTIONS</h2>
        <p className="questions-faq">
          Par quel biais régler ma facture pour recharger mon véhicule ?
        </p>
        <p className="questions-faq">
          Le règlement de la facture peut se faire directement sur votre
          application mobile mais également sur la borne de recharge.
          <br />
          Attention cependant, le règlement ne peut être effectué que par carte
          bancaire.
        </p>
        <p className="questions-faq">
          Puis-je recharger mon véhicule même sous la pluie ou sous la neige?
        </p>
        <p className="questions-faq">
          Pas d'inquiétude à ce sujet ! Les véhicules, câbles et bornes sont
          conçus pour supporter des conditions météo extrêmes.
          <br /> Veillez cependant à retirer la neige autour des connecteurs
          avant de recharger votre véhicule.
        </p>
        <p className="questions-faq">
          Quelle est la durée maximale de réservation d'une borne de recharge ?
        </p>
        <p className="questions-faq">
          Chaque réservation est prévue pour une durée de 30 minutes (durée
          nécessaire à la recharge de votre véhicule).
        </p>
      </div>
      <div className="rules-container">
        <h2 className="subtitle-faq">
          CHARTE DE BONNE CONDUITE DE LA RECHARGE
        </h2>
        <p className="questions-faq">
          Afin que tout le monde puisse profiter des bornes de recharges dans de
          bonnes conditions, veuillez suivre ces règles pleines de bon sens.
        </p>
        <p className="questions-faq">
          1. Ne stationnez sur un emplacement de recharge que si vous rechargez.
          Personne n’aurait l’idée de stationner devant une pompe à essence tout
          <br /> en faisant ses courses, il en est de même avec une borne de
          recharge.
        </p>
        <p className="questions-faq">
          2. Quittez l’emplacement de recharge dès que votre véhicule est
          chargé. Laissez la place aux autres conducteurs pour que tout le monde
          puisse en <br /> proﬁter !
        </p>
        <p className="questions-faq">
          3. Prenez soin des équipements. Ne quittez pas la borne sans avoir
          raccroché la prise de charge.
        </p>
        <p className="questions-faq">
          4. Soyez courtois. Faites preuve de pédagogie face aux
          électromobilistes qui ne sont pas sensibilisés à ces règles de bonne
          conduite mais <br />
          également face aux usagers de véhicules thermiques qui ne respectent
          pas les places réservées aux véhicules électriques.
        </p>
      </div>
      <div className="informations-container">
        <h2 className="subtitle-faq">MODIFICATIONS INFORMATIONS DU PROFIL</h2>
        <p className="questions-faq">
          Si vous souhaitez modifier des informations sur votre profil, il
          faudra :
        </p>
        <p className="questions-faq">1. Vous connecter sur votre compte</p>
        <p className="questions-faq">2. Cliquer sur la carte "Profil"</p>
        <p className="questions-faq">
          3. Sélectionner la rubrique que vous souhaitez modifier
        </p>
        <p className="questions-faq">
          4. Remplir le formulaire avec les nouvelles informations.
        </p>
      </div>
    </div>
  );
}

export default Faq;
