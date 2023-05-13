import { deleteContact } from "./apiRequests";

id = document.getElementById("out-id").textContent;
delete_btn = document.getElementById("delete-btn");

delete_btn.addEventListener("click", async () => {
  await deleteContact(id);
  window.location.href = `/contacts`;
});
