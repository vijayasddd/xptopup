<template>
  <div class="space-y-4 lg:space-y-8">
    <div
      class="bg-gradient-to-br from-indigo-900/60 via-slate-800/60 to-purple-900/60 backdrop-blur-sm rounded-xl p-4 lg:p-6 border border-slate-600/50 shadow-xl shadow-purple-900/20"
    >
      <h2
        class="text-lg lg:text-xl font-bold text-white mb-3 lg:mb-4 drop-shadow-lg"
      >
        {{ $t("content.description.title") }}
      </h2>
      <div
        class="text-slate-200 space-y-2 lg:space-y-3 text-sm leading-relaxed"
      >
        <p>{{ $t("content.description.content1") }}</p>
        <p>
          {{ $t("content.description.content2") }}
        </p>
        <p>
          {{ $t("content.description.content3") }}
        </p>
      </div>
    </div>
    <div
      class="bg-gradient-to-br from-indigo-900/60 via-slate-800/60 to-purple-900/60 backdrop-blur-sm rounded-xl p-4 lg:p-6 border border-slate-600/50 shadow-xl shadow-purple-900/20"
    >
      <h2
        class="text-lg lg:text-xl font-bold text-white mb-3 lg:mb-4 drop-shadow-lg"
      >
        {{ $t("content.faqs.title") }}
      </h2>
      <div class="space-y-3 lg:space-y-4">
        <div class="text-sm">
          <p class="font-semibold text-amber-300 mb-1 drop-shadow-md">
            {{ $t("content.faqs.q1") }}
          </p>
          <p class="text-slate-200">{{ $t("content.faqs.a1") }}</p>
        </div>
        <div class="text-sm">
          <p class="font-semibold text-amber-300 mb-1 drop-shadow-md">
            {{ $t("content.faqs.q2") }}
          </p>
          <p class="text-slate-200">{{ $t("content.faqs.a2") }}</p>
        </div>
        <div class="text-sm">
          <p class="font-semibold text-amber-300 mb-1 drop-shadow-md">
            {{ $t("content.faqs.q3") }}
          </p>
          <p class="text-slate-200">{{ $t("content.faqs.a3") }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>
