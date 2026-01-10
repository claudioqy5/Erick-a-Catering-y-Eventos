<!-- src/components/CotizacionModal.vue -->
<template>
  <div v-if="show" class="modal-overlay" @click="$emit('close')">
    <div class="modal" @click.stop>
      <button class="close-btn" @click="$emit('close')" aria-label="Cerrar">×</button>

      <h2>Cotiza tu Evento</h2>
      <p class="modal-subtitle">Cuéntanos sobre tu celebración y te enviaremos una cotización personalizada</p>

      <form @submit.prevent="enviar">
        <input type="text" v-model="localForm.nombre" placeholder="Nombre completo *" required />

        <input type="tel" v-model="localForm.telefono" placeholder="Teléfono / WhatsApp *" required />

        <input type="email" v-model="localForm.email" placeholder="Email (opcional)" />

        <select v-model="localForm.tipoEvento" required>
          <option value="" disabled selected>Tipo de evento *</option>
          <option>Boda</option>
          <option>Cumpleaños</option>
          <option>Bautizo</option>
          <option>Fiesta infantil</option>
          <option>Evento corporativo</option>
          <option>15 años</option>
          <option>Otro</option>
        </select>

        <input type="date" v-model="localForm.fecha" required />

        <input type="number" v-model="localForm.invitados" placeholder="Número de invitados *" min="10" required />

        <textarea v-model="localForm.mensaje" rows="5"
          placeholder="¿Qué necesitas? (mesas, sillas, cubiertos, mantelería, decoración, etc.)"></textarea>

        <button type="submit" class="submit-btn">
          Enviar Cotización
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  show: Boolean,
  modelValue: {
    type: Object,
    default: () => ({})
  }
})

const emit = defineEmits(['update:modelValue', 'close', 'enviado'])

const localForm = ref({
  nombre: '',
  telefono: '',
  email: '',
  tipoEvento: '',
  fecha: '',
  invitados: '',
  mensaje: ''
})

// Sincroniza con el formulario padre (v-model)
watch(() => props.modelValue, (newVal) => {
  localForm.value = { ...localForm.value, ...newVal }
}, { deep: true })

const enviar = () => {
  const mensaje = `Nueva cotización:\nNombre: ${localForm.value.nombre}\nTeléfono: ${localForm.value.telefono}\nEmail: ${localForm.value.email}\nEvento: ${localForm.value.tipoEvento}\nFecha: ${localForm.value.fecha}\nInvitados: ${localForm.value.invitados}\nMensaje: ${localForm.value.mensaje}`
  
  const url = `https://wa.me/962956919?text=${encodeURIComponent(mensaje)}`
  window.open(url, '_blank')
  
  emit('enviado')
  emit('close')
  // Opcional: limpiar formulario
  localForm.value = {
    nombre: '', telefono: '', email: '', tipoEvento: '', fecha: '', invitados: '', mensaje: ''
  }
}
</script>

<style scoped>
/* Todo el estilo del modal que tenías antes, pégalo aquí exactamente igual */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  z-index: 2000;
  overflow-y: auto;
  animation: fadeIn 0.3s ease-out;
}

.modal {
  background: white;
  border-radius: 20px;
  padding: 3rem 2.5rem 2.5rem;
  width: 100%;
  max-width: 520px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
  animation: slideUp 0.4s ease-out;
}

.close-btn {
  position: absolute;
  top: 18px;
  right: 24px;
  background: none;
  border: none;
  font-size: 2.2rem;
  color: #aaa;
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.2s ease;
}

.close-btn:hover {
  background: #f5f5f5;
  color: #888;
}

.modal h2 {
  text-align: center;
  font-size: 2rem;
  color: #222;
  margin: 0 0 0.5rem 0;
  font-weight: 600;
}

.modal-subtitle {
  text-align: center;
  color: #666;
  font-size: 1.05rem;
  margin: 0 0 2.5rem 0;
  line-height: 1.5;
}

.modal input,
.modal select,
.modal textarea {
  width: 100%;
  padding: 1rem 1.2rem;
  margin-bottom: 1.3rem;
  border: 1.5px solid #e0e0e0;
  border-radius: 12px;
  font-size: 1rem;
  background: #fafafa;
  transition: all 0.3s ease;
  box-sizing: border-box;
}

.modal input:focus,
.modal select:focus,
.modal textarea:focus {
  outline: none;
  border-color: #d4af37;
  background: white;
  box-shadow: 0 0 0 4px rgba(212, 175, 55, 0.1);
}

.modal textarea {
  resize: vertical;
  min-height: 110px;
}

.submit-btn {
  width: 100%;
  background: linear-gradient(135deg, #25D366, #128C7E);
  color: white;
  padding: 1.2rem;
  border: none;
  border-radius: 50px;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 8px 20px rgba(37, 211, 102, 0.3);
}

.submit-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 30px rgba(37, 211, 102, 0.4);
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 480px) {
  .modal {
    padding: 2.5rem 1.8rem 2rem;
    border-radius: 16px;
  }
  .modal h2 { font-size: 1.8rem; }
  .modal-subtitle { font-size: 1rem; }
}
</style>