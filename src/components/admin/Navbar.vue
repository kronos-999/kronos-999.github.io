
<script setup>
import { t } from '~/i18n'

// DARK MODE
const preferedDark = usePreferredDark();
const isDark = useStorage('isDark', preferedDark.value);
const body = ref(null)

const toggleDarkMode = () => {
  if (body.value) {
    if (isDark.value) {
      body.value.classList.remove('dark');
    } else {
      body.value.classList.add('dark');
    }
  }
  isDark.value = !isDark.value;
};

onMounted(async () => {
  await nextTick();

  body.value = document.querySelector('html')
  if (body.value) {
    if (isDark.value) body.value.classList.add('dark');
  }
});
</script>