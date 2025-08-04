import { Component } from '@angular/core';

import { IPartner } from '@interfaces';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent {
  public partners: IPartner[] = [
    {
      url: 'https://www.abc-tourism.com/sl/o-nas/',
      imgSrc: 'assets/partners/ABC_logo.png',
      alt: 'ABC Tourism',
      ariaLabel: 'ABC Tourism'
    },
    {
      url: 'http://atletski-klub-radovljica.si',
      imgSrc: 'assets/partners/AK-Radovljica_logo.png',
      alt: 'AK Radovljica',
      ariaLabel: 'AK Radovljica'
    },
    {
      url: 'https://www.alventus.com',
      imgSrc: 'assets/partners/Alventus_logo.png',
      alt: 'Alventus Viajes',
      ariaLabel: 'Alventus Viajes'
    },
    {
      url: 'https://duradovljica.rai.si',
      imgSrc: 'assets/partners/DU-Radovljica_logo.png',
      alt: 'DU Radovljica',
      ariaLabel: 'DU Radovljica',
      inverted: true
    },
    {
      url: 'https://www.jskd.si/rezidenca/uvod_studijski_dejavnosti.htm',
      imgSrc: 'assets/partners/JSDK_logo.png',
      alt: 'JSDK',
      ariaLabel: 'JSDK'
    },
    {
      url: 'https://kercematours.com',
      imgSrc: 'assets/partners/Kercem_logo.png',
      alt: 'Kercem Tours',
      ariaLabel: 'Kercem Tours'
    },
    {
      url: 'http://www.nk-lesce.si',
      imgSrc: 'assets/partners/NK-Lesce_logo.png',
      alt: 'NK Lesce',
      ariaLabel: 'NK Lesce'
    },
    {
      url: 'https://www.nomago.si',
      imgSrc: 'assets/partners/Nomago_logo.png',
      alt: 'Nomago',
      ariaLabel: 'Nomago'
    },
    {
      url: 'https://www.okbled.si',
      imgSrc: 'assets/partners/OK-Bled_logo.png',
      alt: 'OK Bled',
      ariaLabel: 'OK Bled'
    },
    {
      url: 'https://os-aljaza.si',
      imgSrc: 'assets/partners/OS-Jakob-Aljaz-Kranj_logo.png',
      alt: 'OS Jakoba Aljaza',
      ariaLabel: 'OS Jakoba Aljaza'
    },
    {
      url: 'https://www.os-lipnica.si',
      imgSrc: 'assets/partners/OS-Lipnica_logo.png',
      alt: 'OS Lipnica',
      ariaLabel: 'OS Lipnica'
    },
    {
      url: 'https://www.osmatijecopa.si',
      imgSrc: 'assets/partners/OS-Matija-Copa-Kranj_logo.png',
      alt: 'OS Matije Copa Kranj',
      ariaLabel: 'OS Matije Copa Kranj',
      inverted: true
    },
    {
      url: 'https://sic-rad.si',
      imgSrc: 'assets/partners/SIC-Radovljica_logo.png',
      alt: 'SIC Radovljica',
      ariaLabel: 'SIC Radovljica'
    },
    {
      url: 'https://www.os-naklo.si',
      imgSrc: 'assets/partners/OS-Naklo_logo.png',
      alt: 'OS Naklo',
      ariaLabel: 'OS Naklo'
    },
    {
      url: 'https://www.pdradovljica.si',
      imgSrc: 'assets/partners/PD-Radovljica_logo.png',
      alt: 'PD Radovljica',
      ariaLabel: 'PD Radovljica'
    },
    {
      url: 'https://www.relax.si',
      imgSrc: 'assets/partners/Relax_logo.png',
      alt: 'Relax Turizem',
      ariaLabel: 'Relax Turizem'
    },
    {
      url: 'https://www.studiosus.com',
      imgSrc: 'assets/partners/Studiosus_logo.png',
      alt: 'Studiosus',
      ariaLabel: 'Studiosus'
    },
    {
      url: 'http://www.desetnica.si',
      imgSrc: 'assets/partners/Turizem-desetnica_logo.png',
      alt: 'Turizem Desetnica',
      ariaLabel: 'Turizem Desetnica',
      inverted: true
    },
    {
      url: 'https://www.vrtec-radovljica.si',
      imgSrc: 'assets/partners/Vrtec-Radovljica_logo.png',
      alt: 'Vrtec Radovljica',
      ariaLabel: 'Vrtec Radovljica'
    }
  ];
}
