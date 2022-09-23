

<script setup>

// I18N
const { availableLocales, locale } = useI18n();
// DARK MODE
const preferedDark = usePreferredDark();
const isDark = useStorage('isDark', preferedDark.value);
const body = ref<HTMLBodyElement | null>(null);

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

  body.value = document.querySelector('body') as HTMLBodyElement;
  if (body.value) {
    if (isDark.value) body.value.classList.add('dark');
  }
});
</script>