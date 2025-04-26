<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import "@web/component";

const lastMessage = ref("");

function handleChatMessage(event: CustomEvent) {
  console.log("Received from WebComponent:", event.detail);
  lastMessage.value = `From ${event.detail.from}: ${event.detail.message}`;
}

onMounted(() => {
  window.addEventListener("chat-message", handleChatMessage as EventListener);
});

onUnmounted(() => {
  window.removeEventListener(
    "chat-message",
    handleChatMessage as EventListener
  );
});
</script>

<template>
  <div>
    <my-component name="Sumin"></my-component>
    <div style="margin-top: 20px; padding: 10px; border: 1px solid #ccc">
      <h3>Vue에서 받은 채팅:</h3>
      <p>{{ lastMessage }}</p>
    </div>
  </div>
</template>
