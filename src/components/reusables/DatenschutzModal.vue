<template>
	<div
		v-if="isVisible"
		id="privacy-modal"
		class="privacy-modal-backdrop"
		title="Datenschutzerklärung"
		aria-labelledby="modal-title"
		aria-describedby="modal-desc"
	>
		<div class="modal-content">
			<h2>Datenschutzerklärung</h2>
			<div class="modal-body">
				<h5>1. Einleitung</h5>
				<ul>
					<li>
						Wir freuen uns, dass Sie unsere Website besuchen und bedanken uns für Ihr Interesse. Der Schutz Ihrer persönlichen Daten ist uns sehr wichtig. Nachfolgend informieren wir Sie ausführlich über den Umgang mit Ihren Daten.
					</li>
				</ul>
				<h5>2. Verantwortlicher</h5>
				<ul>
					<li>
						Verantwortlicher für die Datenerhebung, -verarbeitung und -nutzung im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
					</li>
					<li>
						<ul>
							<li>da capo e.V.</li>
							<li>Hauptstraße 156, 02708 Kottmar OT Obercunnersdorf</li>
							<li>dacapo-chor@web.de</li>
						</ul>
					</li>
				</ul>
				<h5>3. Erhebung und Verarbeitung von Daten</h5>
				<ul>
					<li>
						Bei jedem Zugriff auf unsere Website werden folgende Daten automatisch erfasst:
					</li>
					<li>
						<ul>
							<li>IP-Adresse des Zugreifenden</li>
							<li>Datum und Uhrzeit des Zugriffs</li>
							<li>Name und URL der abgerufenen Datei</li>
							<li>Menge der gesendeten Daten</li>
							<li>Meldung über den erfolgreichen Abruf</li>
							<li>Browsertyp und -version</li>
							<li>Betriebssystem des Nutzers</li>
						</ul>
					</li>
					<li>
						Diese Daten sind für die Bereitstellung der Website notwendig und werden nur für die genannten Zwecke verwendet.
					</li>
				</ul>
				<h5>4. Verwendung von Cookies</h5>
				<ul>
					<li>
						Unsere Website verwendet Cookies, um die Nutzung bestimmter Funktionen zu ermöglichen. Sie können die Speicherung von Cookies in Ihrem Browser deaktivieren. In diesem Fall kann es jedoch sein, dass nicht sämtliche Funktionen der Website verfügbar sind.
					</li>
				</ul>
				<h5>5. Personenbezogene Daten</h5>
				<ul>
					<li>
						Wir erheben personenbezogene Daten nur, wenn Sie uns diese von sich aus zur Verfügung stellen, z.B. beim Ausfüllen eines Kontaktformulars oder bei der Anmeldung für einen Newsletter.
					</li>
				</ul>
				<h5>6. Nutzung und Weitergabe von Daten</h5>
				<ul>
					<li>
						Die von Ihnen zur Verfügung gestellten Daten verwenden wir ausschließlich zu den genannten Zwecken. Eine Weitergabe Ihrer Daten an Dritte erfolgt nicht ohne Ihre ausdrückliche Zustimmung.
					</li>
				</ul>
				<h5>7. Ihre Rechte</h5>
				<ul>
					<li>
						Sie haben das Recht, Auskunft über die von uns über Sie gespeicherten Daten zu erhalten. Außerdem haben Sie das Recht auf Berichtigung, Löschung oder Einschränkung der Verarbeitung Ihrer personenbezogenen Daten
					</li>
				</ul>
				<h5>8. Änderungen der Datenschutzerklärung</h5>
				<ul>
					<li>
						Wir behalten uns vor, diese Datenschutzerklärung regelmäßig zu überprüfen und zu ändern. Die aktuelle Version ist stets auf unserer Website verfügbar.
					</li>
				</ul>
				<h5>9. Kontakt</h5>
				<ul>
					<li>
						Für Fragen zum Datenschutz wenden Sie sich bitte an:
					</li>
					<li>
						<ul>
							<li>da capo e.V.</li>
							<li>Hauptstraße 156</li>
							<li>02708 Kottmar OT Obercunnersdorf</li>
							<li>dacapo-chor@web.de</li>
						</ul>
					</li>
				</ul>
			</div>
			<button
				class="close-btn"
				@click="closeModal"
			>
				Schließen
			</button>
    	</div>
		
	</div>
</template>

<script setup>

const props = defineProps({
	isVisible: {
		type: Boolean,
		required: true
	}
})

const emit = defineEmits(['close'])

function closeModal() {
	emit('close')
}
</script>

<style scoped lang="scss">
.privacy-modal-backdrop {
	position: fixed;
	inset: 0;
	background-color: rgba(0,0,0,0.4);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1000;
	
	h2, h5, ul, li {
		font-family: $text-font !important;
	}
}

.modal-content {
	background: #d1f3e2;
	padding: 2rem;
	border-radius: 8px;
	width: 90%;
	max-width: 800px;
	box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}

.modal-body {
	margin: 1rem 0;
	max-height: 400px;
	overflow-y: auto;
	
	li {
		list-style: none;
	}

}

.close-btn {
	padding: 0.5rem 1rem;
	border: none;
	background: #046b52;
	color: white;
	border-radius: 4px;
	cursor: pointer;
}
</style>