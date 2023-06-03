<template>
  <div>
    <Hero jumpmark="#faqs" />
    <FAQ :faqs="[
      {
        question: 'Was ist MEDCHING?',
        answers: ['MEDCHING ist eine Plattform, auf welcher Ärzte und Kliniken zusammenfinden. Hier können Ärzte nach ihren persönlichen Vorstellungen passende Stellenangebote und Arbeitgeber ermitteln. Ebenso können auch Kliniken, Praxen als auch medizinische Versorgungszentren interessierte Kandidaten finden und anwerben.'],
      },
      {
        question: 'Wie funktioniert MEDCHING?',
        answers: ['Mit MEDCHING bieten wir Ärzten die allumfassende Suchmaschine für ihre ganz individuellen Karrierevorstellungen. Ob Arbeitsatmosphäre, Weiterbildungsmöglichkeiten oder schlicht ein attraktiverer Standort, bei MEDCHING finden Sie genau, was Sie suchen; ohne weitere aufwendige Recherche betreiben zu müssen.'],
      },
      {
        question: 'Welche Informationen kann man bei MEDCHING eintragen/einsehen?',
        bullet_points: true,
        answers: ['Aktuelle spezifische Informationen zur Fachabteilung wie Personalschlüssel, Bettenanzahl und besondere fachspezifische Ausstattung', 'Vita des Chefarztes', 'Weiterbildungsermächtigungen samt zeitlichem Umfang', 'Weitere Informationen zum Arbeitgeber, wie zum Beispiel die Verfügbarkeit einer Betriebskita, Unterkunftsmöglichkeiten für Ärzte, oder besondere Benefits'],
      },
      {
        question: 'Ist MEDCHING kostenpflichtig?',
        answers: ['Nein. Die Nutzung von MEDCHING als auch die Unterstützung durch unsere Berater ist und bleibt für Sie als Arzt kostenlos.'],
      },
      {
        question: 'Wie nutze ich MEDCHING?',
        answers: [
          'MEDCHING kann einfach als Suche genutzt werden, um schnell und unkompliziert individuell zugeschnittene Arbeitsstellen und Arbeitgeber zu finden. Darüber hinaus bietet MEDCHING seinen registrierten Mitgliedern allumfassende Möglichkeiten, noch deutlich spezifischer und aktiver zu suchen.',
          'Für eine einfache Suche bei MEDCHING reicht es, die relevanten Informationen in die Suchmaske auf der Homepage einzugeben, um die ersten Ergebnisse zu erhalten. Mithilfe der Sternvergabe können Sie Ihre persönlichen Prioritäten bezüglich eines Arbeitsverhältnisses umreißen und die Ergebnisse präzisieren. Darüber hinaus können registrierte Ärzte auf die erweiterten Funktionen und Dienstleistungen kostenlos zugreifen.'
        ],
      },
      {
        question: 'Was bietet das MEDCHING Konto?',
        answers: ['Mithilfe eines Kontos können Sie sich nicht nur unbegrenzte Matches anzeigen lassen, sondern auch Ihre Suchpräferenzen speichern oder sich gar automatisiert über neue Matches und passende Stellenangebote benachrichtigen lassen. Weiterhin können Sie wahlweise angeben, ob Sie MEDCHING nur zur eigenständigen Suche nutzen, oder von unseren Beratern oder interessierten Arbeitgebern kontaktiert werden möchten.'],
      },
      {
        question: 'Wie erstelle ich ein MEDCHING Konto?',
        answers: [
          'Es gibt zwei Möglichkeiten zur Erstellung eines Kontos:',
          'Um sich zu registrieren, können Sie entweder bei der Suchfunktion auf der Homepage ein Passwort angeben oder alternativ dem Registrierungsprozess über den Sign-Up Button auf der Homepage oben rechts folgen. Über diesen Button finden Sie auch die Funktion, sich erneut anzumelden.',
        ],
      },
      {
        question: 'Was kann ich bei technischen Problemen (zum Beispiel, wenn ich mein Passwort vergesse habe) tun?',
        answers: [
          'Bei allen Fragen und auch Anregungen zu unserer Website als auch zur Zurücksetzung des Passworts melden Sie sich bei unserem technischen Support unter:',
          'support@medching.de',
          'Montag – Donnerstag 10:00-17:00',
          '+49 (0) 2173 912 8858',
        ],
      },
      {
        question: 'Wen kann ich kontaktieren, wenn ich fachspezifische Hilfe oder Beratung wünsche?',
        answers: [
          'MEDCHING ist eine Plattform der Appromed GmbH – Ärzteberatungs- und -vermittlungsagentur. Unsere langjährig erfahrenen Mitarbeiter stehen Ihnen gerne zu den Büro-Zeiten telefonisch zur Verfügung. Darüber hinaus können Sie uns zu jeder Zeit schriftlich über E-Mail kontaktieren. Unsere Kontaktdaten finden Sie hier:',
          'beratung@medching.de',
          'Montag – Donnerstag 10:00-17:00',
          '+49 (0) 2173 912 8858',
        ],
      },
      {
        question: 'Wie können Kliniken, Praxen und MVZ MEDCHING nutzen?',
        answers: ['MEDCHING bietet auch Kliniken, Praxen und MVZ seine Dienste an. Bitte beachten Sie, dass Institutionen sich kostenlos verifizieren lassen müssen, um MEDCHING nutzen zu können.'],
      },
      {
        question: 'Fallen Kosten für die Verifizierung an?',
        answers: [
          'Nein, die Verifizierung der von Ihnen vertretenden Institution ist kostenlos. Die Verifizierung dient nicht der Monetarisierung. Sie ist lediglich Mittel zur Sicherstellung, dass die auf MEDCHING angezeigten Institutionen akkurat dargestellt werden.',
          'Die weitergreifenden Funktionen zur Ärztesuche und zur Initiierung der Kontaktaufnahme mit potentiellen Arbeitnehmern sind kostenpflichtig. Bitte wenden Sie sich für weitere Informationen an unsere Berater. Gerne beantworten wir Ihnen Ihre Fragen.',
          'info@medching.de',
          'Montag – Donnerstag 10:00-17:00',
          '+49 (0) 2173 912 8858',
        ],
      },
      {
        question: 'Welche Vorzüge bietet eine Verifizierung?',
        answers: [
          'Mithilfe der Verifizierung tragen Sie nicht nur dazu bei, dass die von Ihnen vertretene Institution über MEDCHING angezeigt und empfohlen werden kann, sondern Sie erhalten auch die Möglichkeit, das Profil Ihrer Institution und die darüber angezeigten Daten zu bearbeiten. So können Sie zum Beispiel die vorhandenen Fachbereiche angeben, oder diese in Zukunft im Falle einer Veränderung angleichen. Darüber hinaus können Sie aktuelle Stellenanzeigen verknüpfen.',
          'Je mehr Informationen Sie angeben oder unseren Beratern übermitteln, desto erfolgreicher kann die gemeinsame Zusammenarbeit gestaltet werden und MEDCHING Sie an interessierte Ärzte empfehlen.',
        ],
      },
      {
        question: 'Welche Vorzüge bieten die kostenpflichtigen Funktionen?',
        answers: ['MEDCHING bietet Ihnen die Option, kostenpflichtig unsere Datenbank nach passenden Ärzteprofilen zu durchsuchen. Somit können Sie ganz gezielt nach attraktiven Bewerben suchen, indem Sie zum Beispiel angeben, welche Position ein Arzt inne haben oder wie viele Jahre Erfahrung er mitbringen soll. Die Plattform zeigt Ihnen auf Grundlage Ihrer individuellen Suchkriterien passende Ergebnisse von Ärzten, die akkut einen Stellenwechsel anstreben. Darüber hinaus können Sie eine Kontaktaufnahme zu allen aktuell geeigneten und perspektivisch interessanten Ärzten stellen. Wenn gewünscht, stehen Ihnen unsere erfahrenen Vermittler gerne zur Verfügung.'],
      },
      {
        question: 'Wie funktioniert die Verifizierung für Kliniken, Praxen und MVZ?',
        answers: [
          'Um sich als Institution bei MEDCHING zu verifizieren, klicken Sie auf der Homepage rechts oben auf den Sign-Up Button und folgen Sie den Anweisungen. Bitte beachten Sie, dass die Angabe eines Ansprechspartners und der dazugehörigen Kontakt-Daten notwendig ist, damit eine Verifizierung stattfinden kann.',
          'Je mehr der erfragten Daten bezüglich der vertretenen Institution Sie angeben, desto besser kann MEDCHING Ihren Bedürfnissen entsprechend passende Vermittlungen erzeugen. Natürlich können diese Daten auch nachträglich eingetragen oder geändert werden.',
        ],
      },
      {
        question: 'Wozu nutzt MEDCHING meine persönlichen Daten?',
        answers: ['Ihre persönlichen Daten werden nur im unmittelbar notwendingen Rahmen der Funktionsweise von MEDCHING genutzt. Partner von MEDCHING und von der Appromed GmbH erhalten ausschließlich teilanonymisierte Profilinformationen. Inhalt der übermittelten Daten sind keine persönlichen Kontaktdaten, wie zum Beispiel eine Telefonnummer oder E-Mail-Adresse. Kontaktherstellung zwischen potentiellem Arbeitgeber und Arbeitnehmer findet nur mit ausdrücklichem Einverständnis des Arztes statt. MEDCHING veräußert keinerlei private Daten an außenstehende Dritte.'],
      },
    ]" />
  </div>
</template>

<script setup>

</script>

<route lang="yaml">
meta:
  layout: empty
</route>