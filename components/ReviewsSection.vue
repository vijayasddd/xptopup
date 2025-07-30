<template>
  <div
    class="bg-gradient-to-br from-indigo-900/60 via-slate-800/60 to-purple-900/60 backdrop-blur-sm rounded-xl p-4 lg:p-6 border border-slate-600/50 shadow-xl shadow-purple-900/20"
  >
    <h2
      class="text-lg lg:text-xl font-bold text-white mb-3 lg:mb-4 drop-shadow-lg"
    >
      {{ $t("content.reviews.title") }}
    </h2>
    <div class="space-y-4 lg:space-y-6">
      <div class="text-center">
        <p class="text-4xl lg:text-5xl font-bold text-white drop-shadow-lg">
          {{ overview.averageRating?.toFixed?.(1) || 5 }}
        </p>
        <div class="flex justify-center text-amber-400 text-lg lg:text-xl mt-2">
          <Icon
            v-for="i in 5"
            :key="i"
            name="heroicons:star-solid"
            class="drop-shadow-lg"
          />
        </div>
        <p class="text-xs lg:text-sm text-slate-300 mt-1">
          {{ overview.totalReviews }} {{ $t("content.reviews.reviewsCount") }}
        </p>
      </div>
      <div class="space-y-3 lg:space-y-4">
        <div
          v-for="(review, index) in displayedReviews"
          :key="index"
          class="bg-gradient-to-br from-slate-700/50 via-indigo-900/20 to-purple-900/20 backdrop-blur-sm rounded-lg p-3 lg:p-4 border border-slate-600/30 shadow-lg"
        >
          <div class="flex items-start space-x-2 lg:space-x-3">
            <div
              class="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-amber-500/30"
            >
              <span class="text-slate-900 text-xs lg:text-sm font-bold">{{
                review.username[0]
              }}</span>
            </div>
            <div class="flex-1">
              <div class="space-y-1">
                <span
                  class="text-white font-medium block text-sm lg:text-base drop-shadow-md"
                  >{{ review.username }}</span
                >
                <div class="flex text-amber-400">
                  <Icon
                    v-for="i in review.rating"
                    :key="i"
                    name="heroicons:star-solid"
                    class="h-3 w-3 lg:h-4 lg:w-4 drop-shadow-lg"
                  />
                  <Icon
                    v-for="i in 5 - review.rating"
                    :key="i"
                    name="heroicons:star"
                    class="h-3 w-3 lg:h-4 lg:w-4"
                  />
                </div>
              </div>
              <p class="text-slate-200 text-xs lg:text-sm mt-2 lg:mt-3">
                {{ review.comment }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div v-if="reviews.length > displayedReviews.length" class="text-center">
        <button
          class="px-4 py-2 lg:px-6 lg:py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-lg text-xs lg:text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          @click="loadMoreReviews"
        >
          {{ $t("content.reviews.loadMore") }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, defineProps, ref } from "vue";

const props = defineProps({
  overview: {
    type: Object,
    required: true,
  },
  reviews: {
    type: Array,
    required: true,
  },
});

const reviewsToShow = ref(5);
const displayedReviews = computed(() =>
  props.reviews.slice(0, reviewsToShow.value)
);

const loadMoreReviews = () => {
  reviewsToShow.value = Math.min(reviewsToShow.value + 5, props.reviews.length);
};
</script>
