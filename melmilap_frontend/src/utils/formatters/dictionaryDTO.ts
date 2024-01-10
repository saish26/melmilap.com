export const wordDTO = {
  send: (data: any) => {
    return {
      appId: "lang-inst-g",
      lang: data?.germanWord || "",
      lang_example: data?.germanExample || "",
      nepali: data?.inNepali || "",
      nepali_example: data?.nepaliExample || "",
      np_pronunciation: data?.nepaliPronunciation || "",
      english: data?.inEnglish || "",
      english_example: data?.englishExample || "",
      level: data?.level || "",
    };
  },
};
export const verbsDTO = {
  send: (data: any) => {
    return {
      word: {
        word: data?.word || "",
        infinitive: data?.infinitive || "",
        partizipPrasents: data?.partizipPrasents || "",
        partizipPerfekt: data?.partizipPerfekt || "",
        level: data?.level || "",
        appId: "lang-inst-g",
      },
      tens: data?.tense || [],
    };
  },
  recieve: (data: any) => {
    return {
      word: {
        word: data?.word || "",
        infinitive: data?.infinitive || "",
        partizipPrasents: data?.partizipPrasents || "",
        level: data?.level || "",
        partizipPerfekt: data?.partizipPerfekt || "",
        id: data?.id || "",
      },
      tens: data?.tens?.map((val: any) => ({
        tens_title: val?.tens_title,
        i: val?.i,
        you: val?.you,
        he_She_it: val?.he_She_it,
        we: val?.we,
        you_plural: val?.you_plural,
        they: val?.they,
        you_s_p: val?.you_s_p,
        TenseID: val?.id,
      })),
    };
  },
  editTense: (data: any) => {
    return {
      tens_title: data?.tens_title,
      i: data?.i,
      you: data?.you,
      he_She_it: data?.he_She_it,
      we: data?.we,
      you_plural: data?.you_plural,
      they: data?.they,
      you_s_p: data?.you_s_p,
    };
  },
  edit: (data: any) => {
    return {
      word: data?.word || "",
      infinitive: data?.infinitive || "",
      partizipPrasents: data?.partizipPrasents || "",
      partizipPerfekt: data?.partizipPerfekt || "",
      level: data?.level || "",
    };
  },
};
