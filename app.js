const STORAGE_KEYS = {
  theme: "vvr-theme",
  personas: "vvr-personas",
  wines: "vvr-wines",
  customAromas: "vvr-custom-aromas",
  customVarietals: "vvr-custom-varietals"
};

const ADMIN_EMAILS = ["jinmokju@gmail.com"];

const TASTE_FIELDS = [
  { key: "fruitDriven", label: "Fruitiness", left: "Fruit-Driven", right: "Savory / Earthy" },
  { key: "oak", label: "Oak", left: "New Oak", right: "Neutral Oak" },
  { key: "acidity", label: "Acidity", left: "High", right: "Low" },
  { key: "body", label: "Body", left: "Rich", right: "Lean" },
  { key: "fruitProfile", label: "Fruit Profile", left: "Dark Fruit", right: "Red Fruit" }
];

const VARIETAL_OPTIONS = {
  Red: ["Pinot Noir", "Cabernet Sauvignon", "Merlot", "Syrah", "Shiraz", "Grenache", "Tempranillo", "Sangiovese", "Nebbiolo", "Barbera", "Malbec", "Zinfandel", "Primitivo", "Cabernet Franc", "Petit Verdot", "Carmenere", "Mourvedre", "Gamay", "Dolcetto", "Aglianico", "Montepulciano", "Corvina", "Nerello Mascalese", "Touriga Nacional", "Mencia", "Trousseau", "Blaufrankisch", "Bobal", "Carignan", "Cinsault", "Counoise", "Petit Sirah", "Saperavi"],
  White: ["Chardonnay", "Sauvignon Blanc", "Riesling", "Chenin Blanc", "Semillon", "Pinot Gris", "Pinot Grigio", "Gewurztraminer", "Viognier", "Albarino", "Vermentino", "Marsanne", "Roussanne", "Grenache Blanc", "Clairette", "Ugni Blanc", "Trebbiano", "Arneis", "Cortese", "Verdicchio", "Fiano", "Greco", "Garganega", "Assyrtiko", "Silvaner", "Muscadet", "Melon de Bourgogne", "Torrontes", "Savagnin", "Gruner Veltliner", "Godello", "Timorasso", "Palomino", "Welschriesling"],
  Sparkling: ["Chardonnay", "Pinot Noir", "Pinot Meunier", "Pinot Blanc", "Pinot Gris", "Riesling", "Chenin Blanc", "Xarel-lo", "Macabeo", "Parellada", "Glera", "Lambrusco", "Sémillon", "Aligoté", "Arneis"],
  Rose: ["Grenache", "Cinsault", "Syrah", "Mourvedre", "Pinot Noir", "Sangiovese", "Tempranillo", "Nebbiolo", "Merlot", "Cabernet Sauvignon", "Cabernet Franc", "Gamay", "Corvina", "Aglianico", "Primitivo"],
  Orange: ["Ribolla Gialla", "Pinot Grigio", "Malvasia", "Sauvignon Blanc", "Chardonnay", "Rkatsiteli", "Gewurztraminer", "Muscat", "Vitovska", "Friulano", "Fiano", "Greco", "Vermentino", "Trebbiano", "Semillon"]
};

const REVIEW_STRUCTURE_FIELDS = {
  red: [
    { key: "acidityLevel", label: "Acidity Level", left: "High", right: "Low" },
    { key: "acidityShape", label: "Acidity Shape", left: "Racy", right: "Soft" },
    { key: "body", label: "Body", left: "High", right: "Low" },
    { key: "tanninLevel", label: "Tannin Level", left: "High", right: "Low" },
    { key: "tanninTexture", label: "Tannin Texture", left: "Sticky", right: "Smooth" },
    { key: "finish", label: "Finish", left: "Long", right: "Short" }
  ],
  white: [
    { key: "acidityLevel", label: "Acidity Level", left: "High", right: "Low" },
    { key: "acidityShape", label: "Acidity Shape", left: "Racy", right: "Soft" },
    { key: "body", label: "Body", left: "High", right: "Low" },
    { key: "texture", label: "Texture", left: "Waxy / Oily", right: "Clean" },
    { key: "finish", label: "Finish", left: "Long", right: "Short" }
  ],
  sparkling: [
    { key: "acidityLevel", label: "Acidity Level", left: "High", right: "Low" },
    { key: "acidityShape", label: "Acidity Shape", left: "Racy", right: "Soft" },
    { key: "body", label: "Body", left: "High", right: "Low" },
    { key: "effervescence", label: "Effervescence", left: "Highly Fizzy", right: "Gentle Fizz" },
    { key: "mousseTexture", label: "Mousse Texture", left: "Creamy", right: "Sharp" },
    { key: "finish", label: "Finish", left: "Long", right: "Short" }
  ]
};

const AROMA_OPTIONS = {
  primary: {
    red: {
      Fruit: ["Red Cherry", "Black Cherry", "Morello Cherry", "Sour Cherry", "Red Plum", "Black Plum", "Raspberry", "Wild Strawberry", "Strawberry Jam", "Cranberry", "Pomegranate", "Red Currant", "Blackcurrant", "Blackberry", "Blueberry", "Boysenberry", "Mulberry", "Fig", "Dried Fig", "Date"],
      Floral: ["Rose", "Violet", "Peony", "Lavender", "Hibiscus", "Potpourri"],
      Herbaceous: ["Fresh Herbs", "Thyme", "Rosemary", "Sage", "Mint", "Eucalyptus", "Bay Leaf", "Dill", "Tomato Leaf"],
      Spice: ["Black Pepper", "White Pepper", "Juniper", "Anise", "Licorice"],
      Earthy: ["Wet Earth", "Graphite", "Iron", "Crushed Rock"]
    },
    white: {
      Citrus: ["Lemon", "Lemon Zest", "Lime", "Grapefruit", "Pink Grapefruit", "Orange Zest", "Mandarin", "Yuzu"],
      Orchard: ["Green Apple", "Yellow Apple", "Pear", "Nashi Pear", "Quince", "Yellow Plum"],
      "Stone Fruit": ["White Peach", "Yellow Peach", "Apricot", "Nectarine"],
      Tropical: ["Pineapple", "Mango", "Papaya", "Passion Fruit", "Guava", "Lychee", "Melon", "Cantaloupe"],
      Floral: ["White Flowers", "Jasmine", "Acacia", "Orange Blossom", "Honeysuckle", "Elderflower", "Linden Blossom"],
      Herbaceous: ["Fresh Cut Grass", "Lemongrass", "Fennel", "Mint", "Thai Basil"],
      Mineral: ["Wet Stone", "Chalk", "Sea Spray", "Saline"]
    },
    rose: {
      "Red Fruit": ["Wild Strawberry", "Strawberry", "Raspberry", "Red Cherry", "Cranberry", "Pomegranate", "Red Currant", "Watermelon"],
      Citrus: ["Pink Grapefruit", "Blood Orange", "Orange Zest", "Lemon Peel", "Mandarin"],
      Floral: ["Rose Petal", "Rosehip", "Peony", "Hibiscus", "Orange Blossom", "Jasmine"],
      Herbal: ["Fresh Herbs", "Thyme", "Mint", "Fennel", "Dried Herbs"],
      Mineral: ["Wet Stone", "Saline", "Chalk"]
    },
    sparkling: {
      Citrus: ["Lemon", "Lemon Curd", "Lime", "Grapefruit", "Mandarin", "Orange Zest"],
      Orchard: ["Green Apple", "Yellow Apple", "Pear", "Quince"],
      "Stone Fruit": ["White Peach", "Apricot", "Nectarine"],
      Floral: ["White Flowers", "Acacia", "Apple Blossom", "Linden Blossom"],
      "Autolytic Freshness": ["Fresh Bread", "Biscuit", "Crushed Oyster Shell", "Chalk", "Saline"],
      "Berry Accent": ["Wild Strawberry", "Red Currant", "Raspberry"]
    },
    orange: {
      Citrus: ["Orange Peel", "Mandarin", "Dried Orange Peel", "Bergamot", "Candied Citrus"],
      Orchard: ["Apricot", "Dried Apricot", "Quince", "Yellow Apple", "Pear"],
      "Tea / Herbal": ["Black Tea", "Chamomile", "Earl Grey", "Dried Herbs", "Sage", "Thyme"],
      Floral: ["Orange Blossom", "Jasmine", "Chamomile Flower", "Potpourri"],
      "Resin / Spice": ["Ginger", "Coriander Seed", "Turmeric", "Resin", "Frankincense"],
      Savory: ["Hay", "Walnut Skin", "Almond Skin", "Beeswax"]
    }
  },
  secondary: {
    red: {
      Oak: ["Vanilla", "Oak Toast", "Toast", "Cedar", "Sandalwood", "Coconut"],
      "Baking Spice": ["Clove", "Nutmeg", "Cinnamon", "Allspice", "Star Anise", "Sweet Spice"],
      Roasted: ["Coffee", "Espresso", "Mocha", "Cacao", "Dark Chocolate", "Smoke", "Char", "Toasted Oak"],
      "Malo / Lees": ["Butter", "Cream", "Yogurt", "Sour Cream"],
      Nutty: ["Toasted Almond", "Hazelnut", "Walnut"],
      "Sweet Oak": ["Caramel", "Butterscotch", "Toffee"]
    },
    white: {
      Oak: ["Vanilla", "Oak Toast", "Toast", "Cedar", "Coconut", "Smoke"],
      "Baking Spice": ["Clove", "Nutmeg", "Cinnamon", "Sweet Spice", "Ginger Spice"],
      "Lees / Autolysis": ["Brioche", "Bread Dough", "Toast", "Cream", "Butter", "Yogurt"],
      Nutty: ["Hazelnut", "Toasted Almond", "Marzipan", "Walnut"],
      "Sweet Oak": ["Caramel", "Butterscotch", "Toffee", "Crème Brulee"],
      "Grainy / Roasted": ["Roasted Grain", "Oatmeal", "Shortbread"]
    },
    rose: {
      "Lees / Creamy": ["Cream", "Yogurt", "Lees Stirring", "Soft Brioche"],
      Spice: ["Pink Peppercorn", "White Pepper", "Sweet Spice", "Ginger"],
      Oak: ["Subtle Vanilla", "Light Toast", "Oak Spice"],
      Savory: ["Dried Herbs", "Tomato Leaf", "Wild Fennel"]
    },
    sparkling: {
      Autolysis: ["Brioche", "Bread Dough", "Toast", "Biscuit", "Croissant"],
      Nutty: ["Hazelnut", "Almond Cream", "Marzipan"],
      Creamy: ["Butter", "Cream", "Lemon Curd", "Custard"],
      "Oak / Spice": ["Vanilla", "Toast", "Sweet Spice", "Cinnamon"],
      Roasted: ["Roasted Almond", "Coffee Bean", "Smoked Bread"]
    },
    orange: {
      "Skin Contact": ["Black Tea", "Orange Pith", "Tannin Grip", "Dry Herb", "Resin"],
      Oxidative: ["Bruised Apple", "Walnut", "Almond", "Cider-like Note"],
      Spice: ["Ginger", "Clove", "Nutmeg", "Turmeric", "Coriander"],
      "Lees / Texture": ["Yeast", "Bread Dough", "Beeswax", "Lanolin"]
    }
  },
  tertiary: {
    red: {
      "Earth / Forest": ["Forest Floor", "Underbrush", "Mushroom", "Truffle", "Wet Leaves", "Autumn Leaves", "Humus"],
      Savory: ["Leather", "Game", "Dried Meat", "Bouillon", "Soy", "Umami"],
      "Tobacco / Wood": ["Tobacco", "Cigar Box", "Pipe Tobacco", "Old Cedar", "Sawdust"],
      "Dried Fruit / Floral": ["Dried Cherry", "Dried Plum", "Raisin", "Prune", "Dried Rose", "Potpourri"],
      "Oxidative / Balsamic": ["Balsamic", "Soy Glaze", "Maderized Note", "Volatile Lift", "Tea Leaf"],
      "Mineral / Tertiary": ["Earth", "Dust", "Graphite", "Iron Rust"]
    },
    white: {
      Honeyed: ["Honey", "Acacia Honey", "Beeswax", "Lanolin"],
      "Nutty / Oxidative": ["Hazelnut", "Walnut", "Almond Cream", "Sherry-like Note", "Marzipan"],
      "Mushroom / Earth": ["Mushroom", "Truffle", "Hay", "Dried Hay", "Chamomile"],
      "Petrol / Resinous": ["Petrol", "Kerosene", "Paraffin", "Resin"],
      "Dried Fruit / Citrus": ["Dried Apricot", "Candied Citrus Peel", "Dried Lemon Peel", "Quince Paste"],
      "Bakery / Mature Lees": ["Brioche", "Toast", "Croissant", "Mushroom Butter"]
    },
    rose: {
      "Dried Fruit / Floral": ["Dried Strawberry", "Rosehip", "Dried Rose", "Potpourri"],
      "Savory / Earth": ["Dried Herbs", "Tea Leaf", "Dust", "Autumn Leaves"],
      Oxidative: ["Blood Orange Marmalade", "Dried Citrus", "Nutty Oxidation"]
    },
    sparkling: {
      "Mature Autolysis": ["Toasted Brioche", "Hazelnut", "Mushroom Butter", "Roasted Almond"],
      "Honeyed / Oxidative": ["Honey", "Beeswax", "Baked Apple", "Tarte Tatin"],
      "Mineral / Umami": ["Chalk Dust", "Truffle", "Umami", "Sea Salt"],
      "Dried Citrus / Fruit": ["Candied Lemon Peel", "Dried Apricot", "Quince Paste"]
    },
    orange: {
      "Oxidative / Nutty": ["Walnut", "Hazelnut", "Sherry-like Note", "Rancio", "Almond Skin"],
      "Tea / Herbal": ["Black Tea", "Chamomile", "Dried Herbs", "Tobacco Leaf"],
      "Resin / Honeyed": ["Beeswax", "Lanolin", "Resin", "Honeycomb"],
      "Earthy / Dried Fruit": ["Hay", "Dried Apricot", "Orange Marmalade", "Mushroom"]
    }
  }
};

const createTaste = (favoritePairs, fruitDriven, oak, acidity, body, fruitProfile) => ({
  favoritePairs,
  fruitDriven,
  oak,
  acidity,
  body,
  fruitProfile
});

const seedPersonas = [];

const seedWines = [
  {
    id: "w1",
    name: "Domaine de la Cote Bloom's Field",
    vintage: "2021",
    type: "Red",
    varietal: "Pinot Noir",
    region: "Santa Rita Hills, USA",
    averagePrice: "KRW 165,000",
    image: makePlaceholderImage("Bloom's Field", "#b04158", "#efd8c8"),
    reviews: [
      { id: "local-r1", personaId: "mina", note: "붉은 베리와 장미 향이 선명하고 산도가 끝까지 끌고 간다.", createdAt: "2026-04-08" },
      { id: "local-r2", personaId: "soyeon", note: "빈티지 비교 포인트가 또렷하고 과하지 않다.", createdAt: "2026-04-09" }
    ]
  },
  {
    id: "w2",
    name: "Kumeu River Chardonnay",
    vintage: "2022",
    type: "White",
    varietal: "Chardonnay",
    region: "Auckland, New Zealand",
    averagePrice: "KRW 52,000",
    image: makePlaceholderImage("Kumeu River", "#d2b04c", "#fff0c5"),
    reviews: [
      { id: "local-r3", personaId: "jun", note: "오크는 절제되어 있고 질감이 크리미하다.", createdAt: "2026-04-07" },
      { id: "local-r4", personaId: "eun", note: "시트러스와 미네랄 균형이 좋아 입문자 추천용으로도 적합하다.", createdAt: "2026-04-10" }
    ]
  }
];

const state = {
  selectedPersona: "all",
  selectedType: "All",
  query: "",
  personas: [],
  wines: [],
  supabase: null,
  session: null,
  isAdmin: false,
  reviewFormMode: "create",
  editingWineId: null,
  editingReviewId: null,
  tasteDraft: { fruitDriven: 4, oak: 4, acidity: 4, body: 4, fruitProfile: 4 },
  reviewDraft: createEmptyReviewDraft("Red"),
  customAromas: createEmptyCustomAromas(),
  customVarietals: loadLocal(STORAGE_KEYS.customVarietals || "vvr-custom-varietals", {}),
  imageCandidates: []
};

const el = {
  body: document.body,
  themeToggle: document.getElementById("themeToggle"),
  personaFilters: document.getElementById("personaFilters"),
  reviewerFilters: document.getElementById("reviewerFilters"),
  typeFilters: document.getElementById("typeFilters"),
  personaGrid: document.getElementById("personaGrid"),
  wineGrid: document.getElementById("wineGrid"),
  recentGrid: document.getElementById("recentGrid"),
  searchInput: document.getElementById("searchInput"),
  reviewForm: document.getElementById("reviewForm"),
  tasteForm: document.getElementById("tasteForm"),
  reviewPersona: document.getElementById("reviewPersona"),
  wineType: document.getElementById("wineType"),
  wineName: document.getElementById("wineName"),
  wineVintage: document.getElementById("wineVintage"),
  wineVarietal: document.getElementById("wineVarietal"),
  wineProducer: document.getElementById("wineProducer"),
  wineNameOptions: document.getElementById("wineNameOptions"),
  wineVintageOptions: document.getElementById("wineVintageOptions"),
  wineVarietalOptions: document.getElementById("wineVarietalOptions"),
  wineRegionOptions: document.getElementById("wineRegionOptions"),
  wineNameMeta: document.getElementById("wineNameMeta"),
  wineRegion: document.getElementById("wineRegion"),
  winePrice: document.getElementById("winePrice"),
  wineImage: document.getElementById("wineImage"),
  wineImageLibrary: document.getElementById("wineImageLibrary"),
  wineImageCamera: document.getElementById("wineImageCamera"),
  uploadFallbackPanel: document.getElementById("uploadFallbackPanel"),
  uploadFallbackNote: document.getElementById("uploadFallbackNote"),
  wineImagePreview: document.getElementById("wineImagePreview"),
  imagePreviewCard: document.getElementById("imagePreviewCard"),
  imagePreviewPlaceholder: document.getElementById("imagePreviewPlaceholder"),
  imagePreviewCaption: document.getElementById("imagePreviewCaption"),
  clearImageButton: document.getElementById("clearImageButton"),
  reviewStructureEditor: document.getElementById("reviewStructureEditor"),
  primaryAromaSelector: document.getElementById("primaryAromaSelector"),
  secondaryAromaSelector: document.getElementById("secondaryAromaSelector"),
  tertiaryAromaSelector: document.getElementById("tertiaryAromaSelector"),
  primaryAromaSelected: document.getElementById("primaryAromaSelected"),
  secondaryAromaSelected: document.getElementById("secondaryAromaSelected"),
  tertiaryAromaSelected: document.getElementById("tertiaryAromaSelected"),
  overallScore: document.getElementById("overallScore"),
  wineReview: document.getElementById("wineReview"),
  fetchImageCandidates: document.getElementById("fetchImageCandidates"),
  fetchPriceData: document.getElementById("fetchPriceData"),
  fetchStatus: document.getElementById("fetchStatus"),
  imageCandidateGrid: document.getElementById("imageCandidateGrid"),
  tastePersona: document.getElementById("tastePersona"),
  tasteMode: document.getElementById("tasteMode"),
  personaNameInput: document.getElementById("personaNameInput"),
  personaSummaryPreview: document.getElementById("personaSummaryPreview"),
  favVarietyOne: document.getElementById("favVarietyOne"),
  favRegionOne: document.getElementById("favRegionOne"),
  favVarietyTwo: document.getElementById("favVarietyTwo"),
  favRegionTwo: document.getElementById("favRegionTwo"),
  tasteEditor: document.getElementById("tasteEditor"),
  storageStatus: document.getElementById("storageStatus"),
  storageNote: document.getElementById("storageNote"),
  personaCount: document.getElementById("personaCount"),
  wineCount: document.getElementById("wineCount"),
  reviewCount: document.getElementById("reviewCount"),
  regionCount: document.getElementById("regionCount"),
  authForm: document.getElementById("authForm"),
  adminEmail: document.getElementById("adminEmail"),
  adminPassword: document.getElementById("adminPassword"),
  authStatus: document.getElementById("authStatus"),
  loginButton: document.getElementById("loginButton"),
  signupButton: document.getElementById("signupButton"),
  logoutButton: document.getElementById("logoutButton"),
  authBadge: document.getElementById("authBadge"),
  authHelp: document.getElementById("authHelp"),
  reviewSubmitLabel: document.getElementById("reviewSubmitLabel"),
  cancelEditButton: document.getElementById("cancelEditButton"),
  deletePersonaButton: document.getElementById("deletePersonaButton")
};

init();

async function init() {
  hydrateTheme();
  initializeSupabase();
  bindEvents();
  await hydrateData();
  populatePersonaOptions();
  syncTasteEditor();
  resetReviewForm();
  await refreshSession();
  updateStorageStatus();
  renderAll();
}

function initializeSupabase() {
  if (window.supabase && window.VVR_SUPABASE_URL && window.VVR_SUPABASE_ANON_KEY) {
    state.supabase = window.supabase.createClient(window.VVR_SUPABASE_URL, window.VVR_SUPABASE_ANON_KEY);
  }
}

async function refreshSession() {
  if (!state.supabase) {
    updateAuthUi();
    return;
  }

  const { data } = await state.supabase.auth.getSession();
  state.session = data.session || null;
  state.isAdmin = isAdminEmail(state.session?.user?.email);

  state.supabase.auth.onAuthStateChange((_event, session) => {
    state.session = session || null;
    state.isAdmin = isAdminEmail(state.session?.user?.email);
    updateAuthUi();
    renderAll();
  });

  updateAuthUi();
}

function isAdminEmail(email) {
  return Boolean(email && ADMIN_EMAILS.includes(email.toLowerCase()));
}
async function hydrateData() {
  state.personas = loadLocal(STORAGE_KEYS.personas, seedPersonas);
  state.wines = loadLocal(STORAGE_KEYS.wines, seedWines).map(normalizeLocalWine);
  state.customAromas = normalizeCustomAromas(loadLocal(STORAGE_KEYS.customAromas, createEmptyCustomAromas()));

  if (!state.supabase) {
    return;
  }

  try {
    const [personasResult, winesResult, reviewsResult] = await Promise.all([
      state.supabase.from("personas").select("*").order("display_order"),
      state.supabase.from("wines").select("*").order("created_at", { ascending: false }),
      state.supabase.from("reviews").select("*").order("created_at", { ascending: false })
    ]);

    if (!personasResult.error && personasResult.data?.length) {
      state.personas = personasResult.data.map(normalizePersonaRow);
    }

    if (!winesResult.error && winesResult.data?.length) {
      const reviewsByWine = groupReviewsByWine(reviewsResult.data || []);
      state.wines = winesResult.data.map((row) => normalizeWineRow(row, reviewsByWine[row.id] || []));
    }
  } catch (error) {
    console.error(error);
  }
}

function groupReviewsByWine(rows) {
  return rows.reduce((accumulator, row) => {
    if (!accumulator[row.wine_id]) {
      accumulator[row.wine_id] = [];
    }
    accumulator[row.wine_id].push({
      id: row.id,
      personaId: row.persona_id,
      note: row.note,
      summary: row.summary,
      overallScore: row.overall_score,
      structure: row.structure,
      primaryAromas: row.primary_aromas,
      secondaryAromas: row.secondary_aromas,
      tertiaryAromas: row.tertiary_aromas,
      createdAt: (row.created_at || new Date().toISOString()).slice(0, 10)
    });
    return accumulator;
  }, {});
}

function normalizePersonaRow(row) {
  const persona = {
    id: row.id,
    name: row.name,
    role: row.role,
    focus: row.focus,
    tastes: {
      red: normalizeTaste(row.red_taste),
      white: normalizeTaste(row.white_taste)
    }
  };
  persona.summary = buildPersonaCharacterSummary(persona);
  return persona;
}

function normalizeWineRow(row, reviews) {
  return {
    id: row.id,
    name: row.name,
    producer: row.producer,
    vintage: row.vintage,
    type: row.type,
    varietal: row.varietal,
    region: row.region,
    averagePrice: row.average_price,
    image: sanitizeStoredImage(row.image_url),
    reviews: (reviews || []).map((review) => normalizeReview(review, row.type))
  };
}

function normalizeLocalWine(wine) {
  return {
    ...wine,
    image: sanitizeStoredImage(wine.image),
    reviews: (wine.reviews || []).map((review) => normalizeReview(review, wine.type))
  };
}

function sanitizeStoredImage(value) {
  const image = String(value || "").trim();
  return isUsableImageUrl(image) && !isPlaceholderImage(image) ? image : "";
}

function normalizeReview(review, wineType) {
  const typeKey = getReviewTypeKey(wineType);
  return {
    id: review.id || `local-${cryptoRandomId()}`,
    personaId: review.personaId,
    note: review.summary || review.note || "",
    summary: review.summary || review.note || "",
    overallScore: typeof review.overallScore === "number" ? review.overallScore : (review.overall_score ?? ""),
    structure: normalizeReviewStructure(review.structure, typeKey),
    primaryAromas: normalizeAromaList(review.primaryAromas || review.primary_aromas),
    secondaryAromas: normalizeAromaList(review.secondaryAromas || review.secondary_aromas),
    tertiaryAromas: normalizeAromaList(review.tertiaryAromas || review.tertiary_aromas),
    createdAt: review.createdAt || (review.created_at ? String(review.created_at).slice(0, 10) : new Date().toISOString().slice(0, 10))
  };
}

function normalizeTaste(taste) {
  const favoritePairs = Array.isArray(taste?.favoritePairs)
    ? taste.favoritePairs
    : [
        {
          varietal: Array.isArray(taste?.favorites) ? (taste.favorites[0] || "") : (taste?.varietal || ""),
          region: taste?.region || ""
        },
        {
          varietal: Array.isArray(taste?.favorites) ? (taste.favorites[1] || "") : "",
          region: ""
        }
      ];

  return {
    favoritePairs: [
      {
        varietal: favoritePairs[0]?.varietal || "",
        region: favoritePairs[0]?.region || ""
      },
      {
        varietal: favoritePairs[1]?.varietal || "",
        region: favoritePairs[1]?.region || ""
      }
    ],
    fruitDriven: taste?.fruitDriven || 4,
    oak: taste?.oak || 4,
    acidity: taste?.acidity || 4,
    body: taste?.body || 4,
    fruitProfile: taste?.fruitProfile || 4
  };
}

function createEmptyTaste() {
  return normalizeTaste({});
}

function getReviewTypeKey(type) {
  return type === "Sparkling" ? "sparkling" : (type === "Red" ? "red" : "white");
}

function getAromaTypeKey(type) {
  if (type === "Rose") {
    return "rose";
  }
  if (type === "Sparkling") {
    return "sparkling";
  }
  if (type === "Orange") {
    return "orange";
  }
  if (type === "Red") {
    return "red";
  }
  return "white";
}

function getStructureFields(type) {
  return REVIEW_STRUCTURE_FIELDS[getReviewTypeKey(type)];
}

function createEmptyReviewDraft(type) {
  const typeKey = getReviewTypeKey(type);
  return {
    structure: normalizeReviewStructure({}, typeKey),
    primaryAromas: [],
    secondaryAromas: [],
    tertiaryAromas: []
  };
}

function createEmptyCustomAromas() {
  const types = ["red", "white", "rose", "sparkling", "orange"];
  const categories = ["primary", "secondary", "tertiary"];
  return categories.reduce((categoryAcc, category) => {
    categoryAcc[category] = types.reduce((typeAcc, type) => {
      typeAcc[type] = {};
      return typeAcc;
    }, {});
    return categoryAcc;
  }, {});
}

function normalizeCustomAromas(value) {
  const base = createEmptyCustomAromas();
  for (const category of Object.keys(base)) {
    for (const type of Object.keys(base[category])) {
      const groups = value?.[category]?.[type];
      if (!groups || typeof groups !== "object") {
        continue;
      }
      base[category][type] = Object.fromEntries(
        Object.entries(groups).map(([groupName, notes]) => [groupName, Array.isArray(notes) ? notes.filter(Boolean) : []])
      );
    }
  }
  return base;
}

function normalizeReviewStructure(structure, typeKey) {
  const typeLabel = typeKey === "sparkling" ? "Sparkling" : (typeKey === "red" ? "Red" : "White");
  return getStructureFields(typeLabel).reduce((accumulator, field) => {
    accumulator[field.key] = structure?.[field.key] || 4;
    return accumulator;
  }, {});
}

function normalizeAromaList(values) {
  return Array.isArray(values) ? values.filter(Boolean) : [];
}

function normalizeAromaLabel(value) {
  return value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "");
}

function getAromaOptions(category, type) {
  return Object.values(getAromaGroups(category, type)).flat();
}

function getAromaGroups(category, type) {
  const typeKey = getAromaTypeKey(type);
  const baseGroups = AROMA_OPTIONS[category][typeKey] || {};
  const customGroups = state.customAromas[category][typeKey] || {};
  const merged = {};

  for (const groupName of new Set([...Object.keys(baseGroups), ...Object.keys(customGroups)])) {
    merged[groupName] = [
      ...(Array.isArray(baseGroups[groupName]) ? baseGroups[groupName] : []),
      ...(Array.isArray(customGroups[groupName]) ? customGroups[groupName] : [])
    ].filter(Boolean);
  }

  return merged;
}

function findMatchingAroma(category, type, candidate) {
  const normalized = normalizeAromaLabel(candidate);
  const options = getAromaOptions(category, type);
  return options.find((item) => normalizeAromaLabel(item) === normalized)
    || options.find((item) => normalizeAromaLabel(item).includes(normalized) || normalized.includes(normalizeAromaLabel(item)));
}

function addCustomAroma(category, type, groupName, rawValue) {
  const value = rawValue.trim();
  if (!value) {
    return { ok: false, message: "향미 이름을 입력해주세요." };
  }

  const match = findMatchingAroma(category, type, value);
  if (match) {
    toggleAromaSelection(category, match, true);
    return { ok: false, message: `이미 비슷한 향미 '${match}' 가 있어 그 항목을 선택했습니다.` };
  }

  const typeKey = getAromaTypeKey(type);
  if (!state.customAromas[category][typeKey][groupName]) {
    state.customAromas[category][typeKey][groupName] = [];
  }
  state.customAromas[category][typeKey][groupName].push(value);
  state.customAromas[category][typeKey][groupName].sort((a, b) => a.localeCompare(b));
  saveLocal();
  toggleAromaSelection(category, value, true);
  return { ok: true, message: `'${value}' 향미를 추가했습니다.` };
}

function loadLocal(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : structuredClone(fallback);
  } catch (error) {
    return structuredClone(fallback);
  }
}

function saveLocal() {
  localStorage.setItem(STORAGE_KEYS.personas, JSON.stringify(state.personas));
  localStorage.setItem(STORAGE_KEYS.wines, JSON.stringify(state.wines));
  localStorage.setItem(STORAGE_KEYS.customAromas, JSON.stringify(state.customAromas));
  localStorage.setItem(STORAGE_KEYS.customVarietals, JSON.stringify(state.customVarietals));
}

function hydrateTheme() {
  const savedTheme = localStorage.getItem(STORAGE_KEYS.theme);
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
    el.body.classList.add("dark-mode");
  }
  syncThemeButton();
}

function syncThemeButton() {
  el.themeToggle.textContent = el.body.classList.contains("dark-mode") ? "Light Mode" : "Dark Mode";
}

function bindEvents() {
  el.themeToggle.addEventListener("click", () => {
    el.body.classList.toggle("dark-mode");
    localStorage.setItem(STORAGE_KEYS.theme, el.body.classList.contains("dark-mode") ? "dark" : "light");
    syncThemeButton();
  });

  el.searchInput.addEventListener("input", (event) => {
    state.query = event.target.value.trim().toLowerCase();
    renderWines();
  });

  el.wineType.addEventListener("change", syncReviewEditor);
  el.wineType.addEventListener("change", populateReviewInputs);
  el.wineType.addEventListener("change", updateWineNameMeta);
  el.wineName.addEventListener("change", handleWineNameSelection);
  el.wineName.addEventListener("blur", handleWineNameSelection);
  el.wineVarietal.addEventListener("change", persistCustomVarietalFromInput);
  el.wineVarietal.addEventListener("blur", persistCustomVarietalFromInput);
  el.wineVarietal.addEventListener("change", populateReviewInputs);
  el.wineVarietal.addEventListener("blur", populateReviewInputs);
  el.tastePersona.addEventListener("change", syncTasteEditor);
  el.tasteMode.addEventListener("change", syncTasteEditor);
  el.personaNameInput?.addEventListener("input", refreshPersonaSummaryPreview);
  el.favVarietyOne?.addEventListener("input", refreshPersonaSummaryPreview);
  el.favRegionOne?.addEventListener("input", refreshPersonaSummaryPreview);
  el.favVarietyTwo?.addEventListener("input", refreshPersonaSummaryPreview);
  el.favRegionTwo?.addEventListener("input", refreshPersonaSummaryPreview);
  el.reviewForm.addEventListener("submit", handleReviewSave);
  el.tasteForm.addEventListener("submit", handleTasteSave);
  el.fetchImageCandidates.addEventListener("click", handleImageLookup);
  el.fetchPriceData.addEventListener("click", handlePriceLookup);
  el.wineImage.addEventListener("input", syncImagePreview);
  el.wineImageLibrary?.addEventListener("change", (event) => handleImageUpload(event, "사진 보관함 업로드"));
  el.wineImageCamera?.addEventListener("change", (event) => handleImageUpload(event, "카메라 촬영 업로드"));
  el.clearImageButton.addEventListener("click", clearImageField);
  el.authForm.addEventListener("submit", handleLogin);
  el.signupButton.addEventListener("click", handleSignup);
  el.logoutButton.addEventListener("click", handleLogout);
  el.cancelEditButton.addEventListener("click", resetReviewForm);
  el.deletePersonaButton.addEventListener("click", handlePersonaDelete);
}

function populatePersonaOptions() {
  const reviewOptions = state.personas.length
    ? state.personas.map((persona) => `<option value="${persona.id}">${persona.name}</option>`).join("")
    : '<option value="">Persona를 먼저 등록하세요</option>';
  const tasteOptions = ['<option value="__new__">+ New Persona</option>']
    .concat(state.personas.map((persona) => `<option value="${persona.id}">${persona.name}</option>`))
    .join("");

  el.reviewPersona.innerHTML = reviewOptions;
  el.tastePersona.innerHTML = tasteOptions;

  if (!el.reviewPersona.value) {
    el.reviewPersona.value = state.personas[0]?.id || "";
  }
  if (!el.tastePersona.value) {
    el.tastePersona.value = state.personas[0]?.id || "__new__";
  }
  populateReviewInputs();
}

function populateReviewInputs() {
  const wineOptions = state.wines
    .map((wine) => `<option value="${escapeHtml(wine.name)}">${[
      wine.producer,
      wine.vintage,
      wine.varietal,
      wine.region,
      `${wine.reviews.length} reviews`
    ].filter(Boolean).join(" · ")}</option>`)
    .join("");
  el.wineNameOptions.innerHTML = wineOptions;

  const years = [];
  const currentYear = new Date().getFullYear();
  for (let year = currentYear; year >= 1980; year -= 1) {
    years.push(String(year));
  }
  const existingVintages = [...new Set(state.wines.map((wine) => wine.vintage).filter(Boolean))];
  const vintageOptions = [...new Set([...existingVintages, ...years])];
  el.wineVintageOptions.innerHTML = vintageOptions.map((value) => `<option value="${escapeHtml(value)}"></option>`).join("");

  const type = el.wineType.value || "Red";
  const varietalOptions = getVarietalOptions(type);
  el.wineVarietalOptions.innerHTML = varietalOptions.map((value) => `<option value="${escapeHtml(value)}"></option>`).join("");

  const currentVarietal = el.wineVarietal.value.trim().toLowerCase();
  const regionSource = state.wines.filter((wine) => {
    if (wine.type !== type) {
      return false;
    }
    if (!currentVarietal) {
      return true;
    }
    return String(wine.varietal || "").toLowerCase() === currentVarietal;
  });
  const regionOptions = [...new Set(regionSource.map((wine) => wine.region).filter(Boolean))].sort((a, b) => a.localeCompare(b));
  el.wineRegionOptions.innerHTML = regionOptions.map((value) => `<option value="${escapeHtml(value)}"></option>`).join("");
  updateWineNameMeta();
}

function getVarietalOptions(type) {
  const builtin = VARIETAL_OPTIONS[type] || [];
  const custom = Array.isArray(state.customVarietals[type]) ? state.customVarietals[type] : [];
  return [...new Set([...builtin, ...custom])].sort((a, b) => a.localeCompare(b));
}

function handleWineNameSelection() {
  const name = el.wineName.value.trim();
  if (!name) {
    state.imageCandidates = [];
    renderImageCandidates();
    updateWineNameMeta();
    return;
  }

  const wine = state.wines.find((item) => item.name.toLowerCase() === name.toLowerCase());
  if (!wine) {
    state.imageCandidates = [];
    renderImageCandidates();
    updateWineNameMeta();
    return;
  }

  el.wineType.value = wine.type || el.wineType.value || "Red";
  el.wineProducer.value = wine.producer || "";
  el.wineVintage.value = wine.vintage || "";
  el.wineVarietal.value = wine.varietal || "";
  el.wineRegion.value = wine.region || "";
  el.winePrice.value = wine.averagePrice || "";
  el.wineImage.value = isUsableImageUrl(wine.image || "") ? wine.image : "";
  state.imageCandidates = [];
  syncImagePreview();
  renderImageCandidates();
  syncReviewEditor();
  populateReviewInputs();
}

function updateWineNameMeta() {
  const name = el.wineName.value.trim();
  if (!name) {
    el.wineNameMeta.textContent = "기존에 등록된 와인을 고르면 관련 정보와 리뷰 수를 자동으로 불러옵니다.";
    return;
  }

  const wine = state.wines.find((item) => item.name.toLowerCase() === name.toLowerCase());
  if (!wine) {
    el.wineNameMeta.textContent = "새 와인으로 입력됩니다. 저장 시 새 항목이 생성됩니다.";
    return;
  }

  el.wineNameMeta.textContent = `${wine.reviews.length}개 리뷰가 등록된 기존 와인입니다.${wine.producer ? ` Producer: ${wine.producer}.` : ""}`;
}

function findBestWineFromText(normalizedText) {
  let bestWine = null;
  let bestScore = 0;

  state.wines.forEach((wine) => {
    let score = 0;
    const normalizedName = normalizeLookupValue(wine.name);
    const normalizedProducer = normalizeLookupValue(wine.producer || "");
    const normalizedVarietal = normalizeLookupValue(wine.varietal || "");
    const normalizedRegion = normalizeLookupValue(wine.region || "");
    const normalizedVintage = normalizeLookupValue(wine.vintage || "");
    const nameTokens = splitLookupTokens(wine.name);
    const producerTokens = splitLookupTokens(wine.producer || "");

    if (normalizedName && normalizedText.includes(normalizedName)) {
      score += 8;
    }
    if (normalizedProducer && normalizedText.includes(normalizedProducer)) {
      score += 6;
    }
    if (normalizedVintage && normalizedText.includes(normalizedVintage)) {
      score += 3;
    }
    if (normalizedVarietal && normalizedText.includes(normalizedVarietal)) {
      score += 2;
    }
    if (normalizedRegion && normalizedText.includes(normalizedRegion)) {
      score += 2;
    }
    score += countTokenMatches(normalizedText, nameTokens) * 1.2;
    score += countTokenMatches(normalizedText, producerTokens) * 1.1;
    if (wine.vintage && normalizedText.includes(String(wine.vintage))) {
      score += 3;
    }

    if (score > bestScore) {
      bestScore = score;
      bestWine = wine;
    }
  });

  return bestScore >= 6 ? bestWine : null;
}

function getAllKnownVarietals() {
  return [...new Set(Object.values(VARIETAL_OPTIONS).flat().concat(Object.values(state.customVarietals || {}).flatMap((value) => Array.isArray(value) ? value : [])))];
}

function getAllKnownRegions() {
  return [...new Set(state.wines.map((wine) => wine.region).filter(Boolean))];
}

function getAllKnownProducers() {
  return [...new Set(state.wines.map((wine) => wine.producer).filter(Boolean))];
}

function detectBestKeywordMatch(normalizedText, candidates) {
  const ranked = (candidates || [])
    .filter(Boolean)
    .map((value) => ({ value, normalized: normalizeLookupValue(value) }))
    .map((entry) => ({
      ...entry,
      score: normalizedText.includes(entry.normalized)
        ? entry.normalized.length + 4
        : countTokenMatches(normalizedText, splitLookupTokens(entry.value))
    }))
    .filter((entry) => entry.normalized && entry.score > 0)
    .sort((left, right) => right.score - left.score || right.normalized.length - left.normalized.length);
  return ranked[0]?.value || "";
}

function inferWineType({ normalizedText, varietal, region }) {
  const varietalType = Object.entries(VARIETAL_OPTIONS).find(([, values]) => values.includes(varietal || ""))?.[0];
  if (varietalType) {
    return varietalType;
  }
  if (/(champagne|cava|cremant|prosecco|franciacorta|sparkling)/.test(normalizedText)) {
    return "Sparkling";
  }
  if (/(rose|rosato|rosado)/.test(normalizedText)) {
    return "Rose";
  }
  if (/(orange wine|skin contact|ramato)/.test(normalizedText)) {
    return "Orange";
  }
  if (/(sauternes|chablis|mosel|sancerre|riesling|chardonnay|chenin|sauvignonblanc)/.test(normalizedText)) {
    return "White";
  }
  if (/(barolo|barbaresco|burgundy|bourgogne|rioja|priorat|bordeaux|pinotnoir|cabernetsauvignon|merlot|syrah)/.test(normalizedText)) {
    return "Red";
  }
  if (region && /(champagne|cava|franciacorta)/i.test(region)) {
    return "Sparkling";
  }
  return el.wineType.value || "Red";
}

function deriveWineName(lines, producer, vintage) {
  const cleaned = lines
    .map((line) => line.replace(/\b(19|20)\d{2}\b/g, "").trim())
    .filter(Boolean);
  if (!cleaned.length) {
    return "";
  }
  const producerNormalized = normalizeLookupValue(producer || "");
  const candidates = cleaned.filter((line) => normalizeLookupValue(line) !== producerNormalized);
  const joined = candidates.slice(0, 2).join(" ");
  return joined || cleaned[0] || vintage || "";
}

function splitLookupTokens(value) {
  return String(value || "")
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .split(/[^a-z0-9]+/)
    .filter((token) => token && token.length > 2);
}

function countTokenMatches(normalizedText, tokens) {
  return (tokens || []).reduce((count, token) => count + (normalizedText.includes(token) ? 1 : 0), 0);
}

function normalizeLookupValue(value) {
  return String(value || "")
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "");
}

function persistCustomVarietalFromInput() {
  const type = el.wineType.value || "Red";
  const value = el.wineVarietal.value.trim();
  if (!value) {
    return;
  }

  const existing = getVarietalOptions(type);
  const normalized = normalizeAromaLabel(value);
  const matched = existing.find((item) => normalizeAromaLabel(item) === normalized)
    || existing.find((item) => normalizeAromaLabel(item).includes(normalized) || normalized.includes(normalizeAromaLabel(item)));

  if (matched) {
    el.wineVarietal.value = matched;
    return;
  }

  if (!Array.isArray(state.customVarietals[type])) {
    state.customVarietals[type] = [];
  }
  state.customVarietals[type].push(value);
  state.customVarietals[type] = [...new Set(state.customVarietals[type])].sort((a, b) => a.localeCompare(b));
  saveLocal();
  populateReviewInputs();
}

function renderAll() {
  renderFilters();
  renderPersonas();
  renderWines();
  renderRecentReviews();
  updateMetrics();
  updateAdminAccess();
  syncImagePreview();
}

function renderFilters() {
  renderFilterGroup(el.personaFilters, "all", "전체 Persona", state.selectedPersona, (value) => {
    state.selectedPersona = value;
    renderAll();
  });

  renderFilterGroup(el.reviewerFilters, "all", "모든 리뷰어", state.selectedPersona, (value) => {
    state.selectedPersona = value;
    renderAll();
  });

  state.personas.forEach((persona) => {
    appendChip(el.personaFilters, persona.name, state.selectedPersona === persona.id, () => {
      state.selectedPersona = persona.id;
      renderAll();
    });
    appendChip(el.reviewerFilters, persona.name, state.selectedPersona === persona.id, () => {
      state.selectedPersona = persona.id;
      renderAll();
    });
  });

  el.typeFilters.innerHTML = "";
  ["All", "Red", "White", "Sparkling", "Rose", "Orange"].forEach((type) => appendChip(el.typeFilters, type, state.selectedType === type, () => {
    state.selectedType = type;
    renderWines();
  }));
}

function renderFilterGroup(container, value, label, activeValue, onClick) {
  container.innerHTML = "";
  appendChip(container, label, activeValue === value, () => onClick(value));
}

function appendChip(container, label, active, onClick) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = `chip${active ? " active" : ""}`;
  button.textContent = label;
  button.addEventListener("click", onClick);
  container.appendChild(button);
}
function renderPersonas() {
  const personas = state.selectedPersona === "all"
    ? state.personas
    : state.personas.filter((persona) => persona.id === state.selectedPersona);

  el.personaGrid.innerHTML = personas.length
    ? personas.map(renderPersonaCard).join("")
    : '<div class="empty-state">아직 등록된 persona가 없습니다. 관리자 계정으로 직접 key in 해주세요.</div>';
  attachTasteTabs();
}

function renderPersonaCard(persona) {
  const summary = persona.summary || buildPersonaCharacterSummary(persona);
  return `<article class="persona-card"><div class="persona-header"><div class="persona-top"><div class="avatar">${persona.name.slice(0, 2).toUpperCase()}</div><div><strong>${persona.name}</strong><br><span class="muted">${summary || "취향을 입력하면 자동 요약이 생성됩니다."}</span></div></div></div><div class="taste-tabs"><button type="button" class="tab-button active" data-tab="${persona.id}-red">Red</button><button type="button" class="tab-button" data-tab="${persona.id}-white">White</button></div><div class="taste-panel active" id="${persona.id}-red"><div class="taste-summary">${renderFavoritePills(persona.tastes.red)}</div>${renderTasteTracks(persona.tastes.red, "red")}</div><div class="taste-panel" id="${persona.id}-white"><div class="taste-summary">${renderFavoritePills(persona.tastes.white)}</div>${renderTasteTracks(persona.tastes.white, "white")}</div></article>`;
}

function renderFavoritePills(taste) {
  const items = (taste.favoritePairs || [])
    .map((pair) => [pair?.varietal, pair?.region].filter(Boolean).join(" - "))
    .filter(Boolean);
  return items.length ? items.map((item) => `<span class="pill">${item}</span>`).join("") : '<span class="pill">아직 입력 전</span>';
}

function renderTasteTracks(taste, mode) {
  return getFieldLabels(mode).map((field) => `<div class="taste-track minimal"><div class="taste-axis-head"><strong>${field.label}</strong></div><div class="taste-scale">${renderSegments(taste[field.key])}</div><div class="taste-poles"><span>${field.left}</span><span>${field.right}</span></div></div>`).join("");
}

function renderSegments(activeCount) {
  return `<div class="taste-meter"><div class="taste-line"></div><span class="taste-marker" style="left:${scalePosition(activeCount)}%"></span></div>`;
}

function attachTasteTabs() {
  document.querySelectorAll(".tab-button").forEach((button) => {
    button.addEventListener("click", () => {
      const panelId = button.dataset.tab;
      const card = button.closest(".persona-card");
      card.querySelectorAll(".tab-button").forEach((tab) => tab.classList.remove("active"));
      card.querySelectorAll(".taste-panel").forEach((panel) => panel.classList.remove("active"));
      button.classList.add("active");
      card.querySelector(`#${panelId}`).classList.add("active");
    });
  });
}

function getFieldLabels(mode) {
  if (mode === "white") {
    return [
      { key: "fruitDriven", label: "Fruitiness", left: "Fruit-Driven", right: "Mineral / Linear" },
      { key: "oak", label: "Oak", left: "New Oak", right: "Neutral Oak" },
      { key: "acidity", label: "Acidity", left: "High", right: "Low" },
      { key: "body", label: "Body", left: "Rich", right: "Lean" },
      { key: "fruitProfile", label: "Fruit Profile", left: "Tropical Fruit", right: "Citrus" }
    ];
  }
  return TASTE_FIELDS;
}

function filteredWines() {
  return state.wines.filter((wine) => {
    const matchesType = state.selectedType === "All" || wine.type === state.selectedType;
    const matchesPersona = state.selectedPersona === "all" || wine.reviews.some((review) => review.personaId === state.selectedPersona);
    const haystack = [
      wine.name,
      wine.varietal,
      wine.region,
      ...wine.reviews.map((review) => [
        review.personaId,
        review.summary,
        ...review.primaryAromas,
        ...review.secondaryAromas,
        ...review.tertiaryAromas
      ].join(" "))
    ].join(" ").toLowerCase();
    const matchesQuery = !state.query || haystack.includes(state.query);
    return matchesType && matchesPersona && matchesQuery;
  });
}

function renderWines() {
  const wines = filteredWines();
  if (!wines.length) {
    el.wineGrid.innerHTML = '<div class="empty-state">조건에 맞는 와인이 아직 없습니다. 새 리뷰를 추가해보세요.</div>';
    return;
  }

  el.wineGrid.innerHTML = wines.map((wine) => renderWineCard(wine)).join("");
  attachReviewActions();
}

function renderWineCard(wine) {
  const visibleReviews = wine.reviews.filter((review) => state.selectedPersona === "all" || review.personaId === state.selectedPersona);
  const reviewMarkup = visibleReviews.map((review) => renderReviewSnippet(wine, review)).join("");
  const typeClass = `type-${String(wine.type || "red").toLowerCase()}`;

  return `<article class="wine-card ${typeClass}"><img class="wine-image" src="${wine.image || makePlaceholderImage(wine.name, "#8a3650", "#f5d2c6")}" alt="${wine.name} 이미지"><div class="row"><div><h3>${wine.name}</h3><div class="muted">${[wine.producer, wine.vintage, wine.varietal, wine.region].filter(Boolean).join(" · ")}</div></div><span class="type-badge ${typeClass}">${wine.type}</span></div><div class="chip-row" style="margin-top:10px"><span class="pill">${wine.varietal || "Varietal 미입력"}</span><span class="pill">${wine.region || "Region 미입력"}</span><span class="pill">${wine.reviews.length} reviews</span></div><div class="muted" style="margin-top:10px">${wine.averagePrice ? `Wine-Searcher / Manual 가격 메모: ${wine.averagePrice}` : "아직 평균가 메모가 없습니다."}</div>${reviewMarkup}</article>`;
}

function renderReviewSnippet(wine, review) {
  const persona = state.personas.find((item) => item.id === review.personaId);
  const actionButtons = state.isAdmin
    ? `<div class="review-actions"><button type="button" class="review-action" data-action="edit-review" data-wine-id="${wine.id}" data-review-id="${review.id}">수정</button><button type="button" class="review-action danger" data-action="delete-review" data-wine-id="${wine.id}" data-review-id="${review.id}">삭제</button></div>`
    : "";

  const structureMarkup = renderReviewStructureSnapshot(review, wine.type);
  const aromaMarkup = renderAromaSummary(review);
  const scoreMarkup = review.overallScore !== "" && review.overallScore !== null && review.overallScore !== undefined
    ? `<span class="score-pill">${review.overallScore} pts</span>`
    : "";

  return `<div class="review-snippet"><div class="row" style="align-items:center"><div><strong>${persona ? persona.name : review.personaId}</strong><div class="review-meta">${review.createdAt}</div></div>${actionButtons}</div><div class="review-stack"><div class="review-score">${scoreMarkup}<div class="review-copy">${review.summary || review.note}</div></div>${structureMarkup}${aromaMarkup}</div></div>`;
}

function attachReviewActions() {
  document.querySelectorAll("[data-action='edit-review']").forEach((button) => {
    button.addEventListener("click", () => startReviewEdit(button.dataset.wineId, button.dataset.reviewId));
  });

  document.querySelectorAll("[data-action='delete-review']").forEach((button) => {
    button.addEventListener("click", () => handleReviewDelete(button.dataset.wineId, button.dataset.reviewId));
  });
}

function renderRecentReviews() {
  const reviews = state.wines
    .flatMap((wine) => wine.reviews.map((review) => ({ ...review, wineName: wine.name, wineType: wine.type })))
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 4);

  el.recentGrid.innerHTML = reviews.length
    ? reviews.map((review) => {
      const persona = state.personas.find((item) => item.id === review.personaId);
      return `<article class="review-card"><strong>${persona ? persona.name : review.personaId} on ${review.wineName}</strong><div class="review-meta">${review.createdAt} · ${review.wineType}${review.overallScore !== "" && review.overallScore !== null && review.overallScore !== undefined ? ` · ${review.overallScore} pts` : ""}</div><div>${review.summary || review.note}</div></article>`;
    }).join("")
    : '<div class="empty-state">아직 리뷰가 없습니다.</div>';
}

function renderReviewStructureSnapshot(review, type) {
  const fields = getStructureFields(type);
  return `<div class="review-detail-grid">${fields.map((field) => `<div class="review-detail-block"><h4>${field.label}</h4><div class="taste-scale">${renderSegments(review.structure?.[field.key] || 4)}</div><div class="taste-poles"><span>${field.left}</span><span>${field.right}</span></div></div>`).join("")}</div>`;
}

function renderAromaSummary(review) {
  const groups = [
    { label: "Primary", values: review.primaryAromas },
    { label: "Secondary", values: review.secondaryAromas },
    { label: "Tertiary", values: review.tertiaryAromas }
  ].filter((group) => group.values?.length);

  if (!groups.length) {
    return "";
  }

  return `<div class="review-detail-grid">${groups.map((group) => `<div class="review-detail-block"><h4>${group.label} Aromas</h4><div class="selected-aromas">${group.values.map((value) => `<span class="pill">${value}</span>`).join("")}</div></div>`).join("")}</div>`;
}

function updateMetrics() {
  const reviewCount = state.wines.reduce((sum, wine) => sum + wine.reviews.length, 0);
  const regionCount = new Set(state.wines.map((wine) => wine.region).filter(Boolean)).size;
  el.personaCount.textContent = String(state.personas.length);
  el.wineCount.textContent = String(state.wines.length);
  el.reviewCount.textContent = String(reviewCount);
  el.regionCount.textContent = String(regionCount);
}

function updateStorageStatus() {
  if (state.supabase) {
    el.storageStatus.textContent = "Supabase Connected";
    el.storageNote.textContent = state.isAdmin
      ? "관리자 로그인 상태입니다. 리뷰 생성, 수정, 삭제와 taste 저장이 DB에 반영됩니다."
      : "공개 읽기 모드입니다. 관리자 로그인 시 수정 권한이 열립니다.";
  } else {
    el.storageStatus.textContent = "Local Mode";
    el.storageNote.textContent = "Supabase 설정 전에는 localStorage fallback으로 동작합니다.";
  }
}

function updateAuthUi() {
  if (!state.supabase) {
    el.authBadge.textContent = "Local Prototype";
    el.authStatus.textContent = "Supabase Auth를 연결하면 실제 관리자 로그인을 사용할 수 있습니다.";
    el.authHelp.textContent = "현재는 로컬 프로토타입 모드입니다.";
    el.logoutButton.hidden = true;
    el.loginButton.disabled = true;
    el.signupButton.disabled = true;
    updateStorageStatus();
    return;
  }

  const email = state.session?.user?.email || "";
  el.loginButton.disabled = false;
  el.signupButton.disabled = false;

  if (state.isAdmin) {
    el.authBadge.textContent = "Admin Verified";
    el.authStatus.textContent = `${email} 계정으로 로그인됨`;
    el.authHelp.textContent = "이메일 기반 관리자 인증이 통과되어 리뷰 수정/삭제와 taste 저장이 가능합니다.";
    el.logoutButton.hidden = false;
  } else if (state.session) {
    el.authBadge.textContent = "Viewer Session";
    el.authStatus.textContent = `${email} 계정으로 로그인됨`;
    el.authHelp.textContent = "현재 계정은 관리자 허용 목록에 없어 읽기 전용입니다.";
    el.logoutButton.hidden = false;
  } else {
    el.authBadge.textContent = "Admin Locked";
    el.authStatus.textContent = "아직 로그인되지 않았습니다.";
    el.authHelp.textContent = `관리자 이메일(${ADMIN_EMAILS.join(", ")})로 로그인하면 편집 권한이 열립니다.`;
    el.logoutButton.hidden = true;
  }

  updateStorageStatus();
}
function updateAdminAccess() {
  const disabled = !state.isAdmin;
  const reviewSubmitButton = el.reviewSubmitLabel;
  const tasteSubmitButton = el.tasteForm?.querySelector('button[type="submit"]');

  if (reviewSubmitButton) {
    reviewSubmitButton.disabled = disabled;
  }
  if (tasteSubmitButton) {
    tasteSubmitButton.disabled = disabled;
  }

  el.fetchImageCandidates.disabled = false;
  el.fetchPriceData.disabled = false;
  el.cancelEditButton.disabled = disabled;
  el.deletePersonaButton.disabled = disabled || el.tastePersona.value === "__new__" || !state.personas.length;
}

function syncTasteEditor() {
  const persona = getSelectedPersonaData();
  const mode = el.tasteMode.value;
  const taste = persona.tastes[mode];
  el.personaNameInput.value = persona.name || "";
  el.favVarietyOne.value = taste.favoritePairs?.[0]?.varietal || "";
  el.favRegionOne.value = taste.favoritePairs?.[0]?.region || "";
  el.favVarietyTwo.value = taste.favoritePairs?.[1]?.varietal || "";
  el.favRegionTwo.value = taste.favoritePairs?.[1]?.region || "";
  state.tasteDraft = {
    fruitDriven: taste.fruitDriven,
    oak: taste.oak,
    acidity: taste.acidity,
    body: taste.body,
    fruitProfile: taste.fruitProfile
  };
  refreshPersonaSummaryPreview();

  const labels = getFieldLabels(mode);
  el.tasteEditor.innerHTML = labels.map((field) => `<div class="taste-track minimal editor"><div class="taste-axis-head"><strong>${field.label}</strong></div><div class="segment-picker" data-field="${field.key}"></div><div class="taste-poles"><span>${field.left}</span><span>${field.right}</span></div></div>`).join("");
  labels.forEach((field) => renderSegmentPicker(field.key));
}

function getSelectedPersonaData() {
  const selected = state.personas.find((item) => item.id === el.tastePersona.value);
  if (selected) {
    return {
      ...selected,
      tastes: {
        red: normalizeTaste(selected.tastes.red),
        white: normalizeTaste(selected.tastes.white)
      }
    };
  }

  return {
    id: "__new__",
    name: "",
    role: "",
    focus: "",
    summary: "",
    tastes: {
      red: createEmptyTaste(),
      white: createEmptyTaste()
    }
  };
}

function renderSegmentPicker(fieldKey) {
  const host = el.tasteEditor.querySelector(`[data-field="${fieldKey}"]`);
  if (!host) {
    return;
  }

  host.innerHTML = `<div class="taste-meter interactive"><div class="taste-line"></div><span class="taste-marker" style="left:${scalePosition(state.tasteDraft[fieldKey])}%"></span></div>`;
  for (let i = 1; i <= 7; i += 1) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `segment-button${state.tasteDraft[fieldKey] === i ? " active" : ""}`;
    button.addEventListener("click", () => {
      state.tasteDraft[fieldKey] = i;
      renderSegmentPicker(fieldKey);
      refreshPersonaSummaryPreview();
    });
    host.appendChild(button);
  }
}

function refreshPersonaSummaryPreview() {
  if (!el.personaSummaryPreview) {
    return;
  }
  const persona = getSelectedPersonaData();
  const mode = el.tasteMode.value;
  const taste = persona.tastes[mode];
  el.personaSummaryPreview.textContent = buildPersonaCharacterSummary({
    ...persona,
    name: el.personaNameInput.value.trim() || persona.name || "이 페르소나",
    tastes: {
      ...persona.tastes,
      [mode]: {
        ...taste,
        favoritePairs: [
          { varietal: el.favVarietyOne.value.trim(), region: el.favRegionOne.value.trim() },
          { varietal: el.favVarietyTwo.value.trim(), region: el.favRegionTwo.value.trim() }
        ],
        fruitDriven: state.tasteDraft.fruitDriven,
        oak: state.tasteDraft.oak,
        acidity: state.tasteDraft.acidity,
        body: state.tasteDraft.body,
        fruitProfile: state.tasteDraft.fruitProfile
      }
    }
  });
}

function scalePosition(value) {
  return ((Math.max(1, Math.min(7, value)) - 1) / 6) * 100;
}

function syncReviewEditor() {
  const type = el.wineType.value || "Red";
  const typeKey = getReviewTypeKey(type);
  state.reviewDraft.structure = normalizeReviewStructure(state.reviewDraft.structure, typeKey);
  state.reviewDraft.primaryAromas = state.reviewDraft.primaryAromas.filter((item) => getAromaOptions("primary", type).includes(item));
  state.reviewDraft.secondaryAromas = state.reviewDraft.secondaryAromas.filter((item) => getAromaOptions("secondary", type).includes(item));
  state.reviewDraft.tertiaryAromas = state.reviewDraft.tertiaryAromas.filter((item) => getAromaOptions("tertiary", type).includes(item));
  renderReviewStructureEditor(type);
  renderAromaSelector("primary", type);
  renderAromaSelector("secondary", type);
  renderAromaSelector("tertiary", type);
}

function renderReviewStructureEditor(type) {
  const fields = getStructureFields(type);
  el.reviewStructureEditor.innerHTML = fields.map((field) => `<div class="review-track"><div class="taste-axis-head"><strong>${field.label}</strong></div><div class="segment-picker" data-review-field="${field.key}"></div><div class="taste-poles"><span>${field.left}</span><span>${field.right}</span></div></div>`).join("");
  fields.forEach((field) => renderReviewSegmentPicker(field.key));
}

function renderReviewSegmentPicker(fieldKey) {
  const host = el.reviewStructureEditor.querySelector(`[data-review-field="${fieldKey}"]`);
  if (!host) {
    return;
  }

  host.innerHTML = `<div class="taste-meter interactive"><div class="taste-line"></div><span class="taste-marker" style="left:${scalePosition(state.reviewDraft.structure[fieldKey])}%"></span></div>`;
  for (let i = 1; i <= 7; i += 1) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `segment-button${state.reviewDraft.structure[fieldKey] === i ? " active" : ""}`;
    button.addEventListener("click", () => {
      state.reviewDraft.structure[fieldKey] = i;
      renderReviewSegmentPicker(fieldKey);
    });
    host.appendChild(button);
  }
}

function renderAromaSelector(category, type) {
  const selector = el[`${category}AromaSelector`];
  const selectedHost = el[`${category}AromaSelected`];
  const values = state.reviewDraft[`${category}Aromas`];
  const groups = getAromaGroups(category, type);
  const groupNames = Object.keys(groups);

  selectedHost.innerHTML = values.length
    ? values.map((value) => `<span class="pill">${value}</span>`).join("")
    : '<span class="muted">아직 선택 전</span>';

  selector.innerHTML = `
    <div class="aroma-add-row">
      <select data-aroma-group="${category}">
        ${groupNames.map((groupName) => `<option value="${groupName}">${groupName}</option>`).join("")}
      </select>
      <input type="text" data-aroma-input="${category}" placeholder="없는 향미를 직접 추가">
      <button type="button" class="ghost-button" data-aroma-add="${category}" style="color:var(--text); border-color:var(--line); background:var(--surface-strong)">추가</button>
    </div>
    <div class="aroma-add-status" data-aroma-status="${category}">비슷한 표현이 있으면 기존 향미를 자동으로 선택합니다.</div>
  ` + Object.entries(groups).map(([groupName, options]) => `
    <div class="aroma-category">
      <div class="aroma-category-head">
        <strong>${groupName}</strong>
        <span>${options.length} notes</span>
      </div>
      <div class="aroma-chip-row">
        ${options.map((option) => `<button type="button" class="aroma-chip${values.includes(option) ? " active" : ""}" data-aroma-category="${category}" data-aroma-value="${option}">${option}</button>`).join("")}
      </div>
    </div>
  `).join("");
  selector.querySelectorAll("[data-aroma-category]").forEach((button) => {
    button.addEventListener("click", () => toggleAromaSelection(category, button.dataset.aromaValue));
  });
  const addButton = selector.querySelector(`[data-aroma-add="${category}"]`);
  const input = selector.querySelector(`[data-aroma-input="${category}"]`);
  const groupSelect = selector.querySelector(`[data-aroma-group="${category}"]`);
  const status = selector.querySelector(`[data-aroma-status="${category}"]`);
  const submitCustom = () => {
    const result = addCustomAroma(category, type, groupSelect.value, input.value);
    renderAromaSelector(category, type);
    const refreshedStatus = selector.querySelector(`[data-aroma-status="${category}"]`);
    if (refreshedStatus) {
      refreshedStatus.textContent = result.message;
    }
    if (input) {
      input.value = "";
    }
  };
  addButton.addEventListener("click", submitCustom);
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      submitCustom();
    }
  });
}

function toggleAromaSelection(category, value, forceOn = false) {
  const key = `${category}Aromas`;
  const current = state.reviewDraft[key];
  state.reviewDraft[key] = current.includes(value)
    ? (forceOn ? current : current.filter((item) => item !== value))
    : [...current, value];
  renderAromaSelector(category, el.wineType.value || "Red");
}

async function handleLogin(event) {
  event.preventDefault();
  if (!state.supabase) {
    return;
  }

  const email = el.adminEmail.value.trim();
  const password = el.adminPassword.value.trim();
  if (!email || !password) {
    el.authStatus.textContent = "이메일과 비밀번호를 입력해주세요.";
    return;
  }

  el.authStatus.textContent = "로그인 중...";
  const { error } = await state.supabase.auth.signInWithPassword({ email, password });
  el.authStatus.textContent = error ? `로그인 실패: ${error.message}` : "로그인에 성공했습니다.";
}

async function handleSignup() {
  if (!state.supabase) {
    return;
  }

  const email = el.adminEmail.value.trim();
  const password = el.adminPassword.value.trim();
  if (!email || !password) {
    el.authStatus.textContent = "가입용 이메일과 비밀번호를 먼저 입력해주세요.";
    return;
  }

  el.authStatus.textContent = "관리자 계정 생성 중...";
  const { error } = await state.supabase.auth.signUp({ email, password });
  el.authStatus.textContent = error
    ? `가입 실패: ${error.message}`
    : "가입 요청이 완료됐습니다. 이메일 인증이 켜져 있다면 메일을 먼저 확인해주세요.";
}

async function handleLogout() {
  if (!state.supabase) {
    return;
  }

  await state.supabase.auth.signOut();
  resetReviewForm();
}

function startReviewEdit(wineId, reviewId) {
  if (!state.isAdmin) {
    return;
  }

  const wine = state.wines.find((item) => item.id === wineId);
  const review = wine?.reviews.find((item) => String(item.id) === String(reviewId));
  if (!wine || !review) {
    return;
  }

  state.reviewFormMode = "edit";
  state.editingWineId = wineId;
  state.editingReviewId = reviewId;
  el.reviewPersona.value = review.personaId;
  el.wineType.value = wine.type || "Red";
  el.wineName.value = wine.name || "";
  el.wineProducer.value = wine.producer || "";
  el.wineVintage.value = wine.vintage || "";
  el.wineVarietal.value = wine.varietal || "";
  el.wineRegion.value = wine.region || "";
  el.winePrice.value = wine.averagePrice || "";
  el.wineImage.value = isUsableImageUrl(wine.image || "") ? wine.image : "";
  state.imageCandidates = [];
  el.overallScore.value = review.overallScore ?? "";
  el.wineReview.value = review.summary || review.note || "";
  state.reviewDraft = {
    structure: normalizeReviewStructure(review.structure, getReviewTypeKey(wine.type)),
    primaryAromas: normalizeAromaList(review.primaryAromas),
    secondaryAromas: normalizeAromaList(review.secondaryAromas),
    tertiaryAromas: normalizeAromaList(review.tertiaryAromas)
  };
  el.reviewSubmitLabel.textContent = "리뷰 수정 저장";
  el.cancelEditButton.hidden = false;
  syncImagePreview();
  renderImageCandidates();
  syncReviewEditor();
  populateReviewInputs();
  el.reviewForm.scrollIntoView({ behavior: "smooth", block: "start" });
}

function resetReviewForm() {
  state.reviewFormMode = "create";
  state.editingWineId = null;
  state.editingReviewId = null;
  el.reviewForm.reset();
  el.reviewPersona.value = state.personas[0]?.id || "";
  el.wineType.value = "Red";
  el.wineProducer.value = "";
  state.reviewDraft = createEmptyReviewDraft("Red");
  state.imageCandidates = [];
  el.reviewSubmitLabel.textContent = "리뷰 저장하기";
  el.cancelEditButton.hidden = true;
  el.fetchStatus.textContent = "이미지는 후보를 먼저 보고 선택하고, 가격은 별도로 조회합니다.";
  syncImagePreview();
  renderImageCandidates();
  syncReviewEditor();
  populateReviewInputs();
}

async function handleReviewSave(event) {
  event.preventDefault();
  if (!state.isAdmin) {
    alert("관리자 로그인 후 저장할 수 있습니다.");
    return;
  }

  const payload = {
    personaId: el.reviewPersona.value,
    type: el.wineType.value,
    name: el.wineName.value.trim(),
    producer: el.wineProducer.value.trim(),
    vintage: el.wineVintage.value.trim(),
    varietal: el.wineVarietal.value.trim(),
    region: el.wineRegion.value.trim(),
    averagePrice: el.winePrice.value.trim(),
    image: el.wineImage.value.trim(),
    overallScore: el.overallScore.value.trim(),
    summary: el.wineReview.value.trim(),
    structure: { ...state.reviewDraft.structure },
    primaryAromas: [...state.reviewDraft.primaryAromas],
    secondaryAromas: [...state.reviewDraft.secondaryAromas],
    tertiaryAromas: [...state.reviewDraft.tertiaryAromas]
  };

  if (!payload.personaId || !payload.name || !payload.summary || !payload.overallScore) {
    if (!payload.personaId) {
      alert("리뷰를 남기기 전에 persona를 먼저 등록해주세요.");
    } else if (!payload.overallScore) {
      alert("Overall score를 입력해주세요.");
    }
    return;
  }

  const numericScore = Number(payload.overallScore);
  if (Number.isNaN(numericScore) || numericScore < 0 || numericScore > 100) {
    alert("Overall score는 0~100 사이로 입력해주세요.");
    return;
  }

  if (state.reviewFormMode === "edit") {
    await updateExistingReview(payload);
  } else {
    await createNewReview(payload);
  }

  saveLocal();
  renderAll();
  resetReviewForm();
}

async function createNewReview(payload) {
  let wine = state.wines.find((item) => item.name.toLowerCase() === payload.name.toLowerCase());
  if (!wine) {
    wine = {
      id: `wine-${Date.now()}`,
      name: payload.name,
      producer: payload.producer,
      vintage: payload.vintage,
      type: payload.type,
      varietal: payload.varietal,
      region: payload.region,
      averagePrice: payload.averagePrice,
      image: payload.image || makePlaceholderImage(payload.name, "#7a1f35", "#f1ddd2"),
      reviews: []
    };
    state.wines.unshift(wine);
  } else {
    wine.producer = payload.producer || wine.producer;
    wine.vintage = payload.vintage || wine.vintage;
    wine.type = payload.type || wine.type;
    wine.varietal = payload.varietal || wine.varietal;
    wine.region = payload.region || wine.region;
    wine.averagePrice = payload.averagePrice || wine.averagePrice;
    if (payload.image) {
      wine.image = payload.image;
    }
  }

  const review = {
    id: `local-${cryptoRandomId()}`,
    personaId: payload.personaId,
    note: payload.summary,
    summary: payload.summary,
    overallScore: Number(payload.overallScore),
    structure: payload.structure,
    primaryAromas: payload.primaryAromas,
    secondaryAromas: payload.secondaryAromas,
    tertiaryAromas: payload.tertiaryAromas,
    createdAt: new Date().toISOString().slice(0, 10)
  };

  wine.reviews.unshift(review);
  const persistedReview = await persistReviewCreate(wine, review);
  if (persistedReview?.id) {
    review.id = persistedReview.id;
  }
}
async function updateExistingReview(payload) {
  const wine = state.wines.find((item) => item.id === state.editingWineId);
  const review = wine?.reviews.find((item) => String(item.id) === String(state.editingReviewId));
  if (!wine || !review) {
    return;
  }

  wine.name = payload.name;
  wine.producer = payload.producer;
  wine.vintage = payload.vintage;
  wine.type = payload.type;
  wine.varietal = payload.varietal;
  wine.region = payload.region;
  wine.averagePrice = payload.averagePrice;
  wine.image = payload.image || wine.image || makePlaceholderImage(payload.name, "#7a1f35", "#f1ddd2");
  review.personaId = payload.personaId;
  review.note = payload.summary;
  review.summary = payload.summary;
  review.overallScore = Number(payload.overallScore);
  review.structure = payload.structure;
  review.primaryAromas = payload.primaryAromas;
  review.secondaryAromas = payload.secondaryAromas;
  review.tertiaryAromas = payload.tertiaryAromas;
  review.createdAt = new Date().toISOString().slice(0, 10);

  await persistReviewUpdate(wine, review);
}

async function handleReviewDelete(wineId, reviewId) {
  if (!state.isAdmin) {
    return;
  }

  const wine = state.wines.find((item) => item.id === wineId);
  const review = wine?.reviews.find((item) => String(item.id) === String(reviewId));
  if (!wine || !review) {
    return;
  }

  const ok = window.confirm(`'${wine.name}' 리뷰를 삭제할까요?`);
  if (!ok) {
    return;
  }

  wine.reviews = wine.reviews.filter((item) => String(item.id) !== String(reviewId));
  if (!wine.reviews.length) {
    state.wines = state.wines.filter((item) => item.id !== wine.id);
  }

  await persistReviewDelete(wine.id, review.id, !wine.reviews.length);
  saveLocal();
  renderAll();
  if (state.editingReviewId === reviewId) {
    resetReviewForm();
  }
}

async function handleTasteSave(event) {
  event.preventDefault();
  if (!state.isAdmin) {
    alert("관리자 로그인 후 저장할 수 있습니다.");
    return;
  }

  const personaName = el.personaNameInput.value.trim();
  const selectedPersonaId = el.tastePersona.value !== "__new__" ? el.tastePersona.value : "";
  const rawId = selectedPersonaId || slugifyPersonaId(personaName);
  if (!rawId || !personaName) {
    alert("Persona Name을 입력해주세요.");
    return;
  }

  let persona = state.personas.find((item) => item.id === rawId);
  if (!persona) {
    persona = {
      id: rawId,
      name: personaName,
      role: "",
      focus: "",
      summary: "",
      tastes: {
        red: createEmptyTaste(),
        white: createEmptyTaste()
      }
    };
    state.personas.push(persona);
  }

  persona.name = personaName;
  const mode = el.tasteMode.value;
  persona.tastes[mode] = {
    favoritePairs: [
      {
        varietal: el.favVarietyOne.value.trim(),
        region: el.favRegionOne.value.trim()
      },
      {
        varietal: el.favVarietyTwo.value.trim(),
        region: el.favRegionTwo.value.trim()
      }
    ],
    fruitDriven: state.tasteDraft.fruitDriven,
    oak: state.tasteDraft.oak,
    acidity: state.tasteDraft.acidity,
    body: state.tasteDraft.body,
    fruitProfile: state.tasteDraft.fruitProfile
  };
  persona.summary = buildPersonaCharacterSummary(persona);
  persona.role = persona.summary;
  persona.focus = "";

  await persistPersona(persona);
  saveLocal();
  populatePersonaOptions();
  el.tastePersona.value = persona.id;
  el.reviewPersona.value = persona.id;
  syncTasteEditor();
  renderAll();
}

async function handlePersonaDelete() {
  if (!state.isAdmin) {
    return;
  }

  const personaId = el.tastePersona.value;
  if (!personaId || personaId === "__new__") {
    return;
  }

  const persona = state.personas.find((item) => item.id === personaId);
  if (!persona) {
    return;
  }

  const ok = window.confirm(`${persona.name} persona를 삭제할까요? 관련 리뷰도 함께 제거됩니다.`);
  if (!ok) {
    return;
  }

  state.personas = state.personas.filter((item) => item.id !== personaId);
  state.wines = state.wines
    .map((wine) => ({
      ...wine,
      reviews: wine.reviews.filter((review) => review.personaId !== personaId)
    }))
    .filter((wine) => wine.reviews.length);

  await persistPersonaDelete(personaId);
  saveLocal();
  populatePersonaOptions();
  el.tastePersona.value = state.personas[0]?.id || "__new__";
  el.reviewPersona.value = state.personas[0]?.id || "";
  syncTasteEditor();
  renderAll();
}

async function handleImageLookup() {
  const query = buildWineLookupQuery();
  if (!query.primary) {
    el.fetchStatus.textContent = "와인명이나 Producer를 먼저 입력해주세요.";
    return;
  }

  state.imageCandidates = [];
  renderImageCandidates();
  setUploadFallbackVisible(false);
  el.fetchStatus.textContent = "공식 와이너리 페이지를 먼저 찾고, 없으면 수입사, 그다음 공개 이미지 소스를 순서대로 확인하고 있습니다.";

  try {
    const data = await requestWineLookup("image", query);
    const incomingCandidates = Array.isArray(data.image_candidates) ? data.image_candidates : [];
    state.imageCandidates = mergeImageCandidates([], incomingCandidates);
    renderImageCandidates();

    if (!state.imageCandidates.length) {
      setUploadFallbackVisible(true, "공식 와이너리, 수입사, 공개 이미지 fallback까지 모두 확인했지만 후보를 찾지 못했습니다. 여기서 직접 올려주세요.");
      el.fetchStatus.textContent = data.note || "이미지 후보를 찾지 못했습니다. 아래 업로드 fallback을 이용해주세요.";
      return;
    }

    setUploadFallbackVisible(false);
    if (!el.wineImage.value.trim() && state.imageCandidates[0]?.image_url) {
      applyImageCandidate(state.imageCandidates[0]);
    } else {
      el.fetchStatus.textContent = data.note || `${state.imageCandidates.length}개의 이미지 후보를 찾았습니다. 공식/수입사 소스를 우선 정렬했습니다.`;
    }
  } catch (error) {
    setUploadFallbackVisible(true, "자동 탐색 중 오류가 나서 업로드 fallback을 열었습니다. 사진 보관함이나 카메라 촬영으로 직접 넣을 수 있습니다.");
    el.fetchStatus.textContent = `이미지 후보 조회 실패: ${error.message || "Cloudflare Function 또는 API 설정을 확인해주세요."}`;
  }
}
async function handlePriceLookup() {
  const query = buildWineLookupQuery();
  if (!query.primary) {
    el.fetchStatus.textContent = "와인명 또는 검색 키워드를 먼저 입력해주세요.";
    return;
  }

  const existingWine = findClosestExistingWine();
  if (existingWine?.averagePrice && !el.winePrice.value.trim()) {
    el.winePrice.value = existingWine.averagePrice;
    el.fetchStatus.textContent = `기존 등록 와인 '${existingWine.name}'의 가격 메모를 먼저 재사용했습니다.`;
    return;
  }

  el.fetchStatus.textContent = "가격 정보를 조회 중...";
  try {
    const data = await requestWineLookup("price", query);
    if (data.average_price) {
      el.winePrice.value = data.average_price;
      el.fetchStatus.textContent = data.note || "가격 정보를 반영했습니다.";
      return;
    }
    el.fetchStatus.textContent = "평균가를 찾지 못했습니다. Wine-Searcher API 또는 수동 입력을 확인해주세요.";
  } catch (error) {
    el.fetchStatus.textContent = `가격 조회 실패: ${error.message || "Cloudflare Function 또는 API 설정을 확인해주세요."}`;
  }
}

function buildWineLookupQuery() {
  const parts = [
    el.wineProducer.value,
    el.wineName.value,
    el.wineVintage.value,
    el.wineVarietal.value,
    el.wineRegion.value
  ]
    .map((value) => String(value || "").trim())
    .filter(Boolean);
  return {
    primary: parts.join(" "),
    fallback: [el.wineProducer.value, el.wineName.value, el.wineVintage.value]
      .map((value) => String(value || "").trim())
      .filter(Boolean)
      .join(" ")
  };
}

async function requestWineLookup(mode, query) {
  const params = new URLSearchParams();
  params.set("lookup", mode);
  params.set("q", query.primary);
  params.set("name", el.wineName.value.trim());
  params.set("producer", el.wineProducer.value.trim());
  params.set("vintage", el.wineVintage.value.trim());
  params.set("varietal", el.wineVarietal.value.trim());
  params.set("region", el.wineRegion.value.trim());
  params.set("type", el.wineType.value.trim());

  const response = await fetch(`/functions/wine-lookup?${params.toString()}`);
  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data.note || data.error || `${mode} lookup failed`);
  }
  return data;
}

function findClosestExistingWine() {
  const name = normalizeLookupValue(el.wineName.value);
  const producer = normalizeLookupValue(el.wineProducer.value);
  const vintage = String(el.wineVintage.value || "").trim();
  if (!name && !producer) {
    return null;
  }

  let bestWine = null;
  let bestScore = 0;
  state.wines.forEach((wine) => {
    let score = 0;
    if (name && normalizeLookupValue(wine.name).includes(name)) {
      score += 8;
    }
    if (producer && normalizeLookupValue(wine.producer || "").includes(producer)) {
      score += 6;
    }
    if (vintage && String(wine.vintage || "") === vintage) {
      score += 3;
    }
    if (score > bestScore) {
      bestScore = score;
      bestWine = wine;
    }
  });

  return bestScore >= 6 ? bestWine : null;
}

function clearImageField() {
  el.wineImage.value = "";
  if (el.wineImageLibrary) {
    el.wineImageLibrary.value = "";
  }
  if (el.wineImageCamera) {
    el.wineImageCamera.value = "";
  }
  syncImagePreview();
}

function mergeImageCandidates(existing, incoming) {
  const merged = [...existing];
  incoming.forEach((candidate) => {
    if (!candidate?.image_url || !isUsableImageUrl(candidate.image_url)) {
      return;
    }
    if (!merged.some((item) => item.image_url === candidate.image_url)) {
      merged.push(candidate);
    }
  });
  return merged.slice(0, 6);
}

function renderImageCandidates() {
  if (!el.imageCandidateGrid) {
    return;
  }
  el.imageCandidateGrid.innerHTML = state.imageCandidates.length
    ? state.imageCandidates.map((candidate, index) => `
      <div class="candidate-card">
        <img src="${escapeHtml(candidate.image_url)}" alt="와인 이미지 후보 ${index + 1}">
        <div class="candidate-meta">
          <strong>${escapeHtml(candidate.image_source || "Image candidate")}</strong>
          <span>${escapeHtml(candidate.matched_query || "")}</span>
        </div>
        <button class="ghost-button" type="button" data-image-candidate="${index}" style="color:var(--text); border-color:var(--line); background:var(--surface-strong)">이 이미지 사용</button>
      </div>
    `).join("")
    : '<div class="empty-state">공식 와이너리, 수입사, 공개 이미지 소스 순으로 후보를 찾고 있습니다. 아직 불러온 후보가 없습니다.</div>';

  el.imageCandidateGrid.querySelectorAll("[data-image-candidate]").forEach((button) => {
    button.addEventListener("click", () => {
      const candidate = state.imageCandidates[Number(button.dataset.imageCandidate)];
      if (candidate) {
        applyImageCandidate(candidate);
      }
    });
  });
}
function applyImageCandidate(candidate) {
  if (!candidate?.image_url || !isUsableImageUrl(candidate.image_url)) {
    el.fetchStatus.textContent = "선택한 후보가 실제 이미지 URL이 아니라서 적용하지 않았습니다.";
    return;
  }
  el.wineImage.value = candidate.image_url;
  syncImagePreview(candidate.image_source || "");
  setUploadFallbackVisible(false);
  el.fetchStatus.textContent = `이미지 후보를 적용했습니다${candidate.image_source ? ` (${candidate.image_source})` : ""}.`;
}

function isPlaceholderImage(url) {
  return String(url || "").startsWith("data:image/svg+xml") && String(url || "").includes("Vintage%20Varietal%20Region");
}
function isUsableImageUrl(url) {
  if (!url) {
    return false;
  }
  if (String(url).startsWith("data:image/")) {
    return true;
  }

  try {
    const parsed = new URL(url);
    const host = parsed.hostname.toLowerCase();
    const href = parsed.href.toLowerCase();
    const path = parsed.pathname.toLowerCase();
    if (!/^https?:$/.test(parsed.protocol)) {
      return false;
    }
    if (
      host.includes("google.") ||
      host.includes("bing.com") ||
      host.includes("search.yahoo.com") ||
      href.includes("/search?") ||
      href.includes("tbm=isch") ||
      href.includes("/imgres?")
    ) {
      return false;
    }
    return /\.(jpg|jpeg|png|webp|gif|avif)$/i.test(path) ||
      host.includes("openverse") ||
      host.includes("wikimedia") ||
      host.includes("commons.wikimedia") ||
      host.includes("wine-searcher");
  } catch (_error) {
    return false;
  }
}

function setUploadFallbackVisible(visible, note = "") {
  if (el.uploadFallbackPanel) {
    el.uploadFallbackPanel.hidden = !visible;
  }
  if (el.uploadFallbackNote) {
    el.uploadFallbackNote.textContent = note || "공식 와이너리, 수입사, 공개 이미지 fallback까지 다 돌아도 못 찾았을 때만 직접 업로드를 여세요.";
  }
}

async function handleImageUpload(event, sourceLabel) {
  const file = event.target.files?.[0];
  if (!file) {
    return;
  }

  try {
    const dataUrl = await readFileAsDataUrl(file);
    el.wineImage.value = dataUrl;
    state.imageCandidates = [];
    renderImageCandidates();
    syncImagePreview(sourceLabel);
    setUploadFallbackVisible(true, "자동 탐색으로 못 찾은 경우를 위한 fallback 이미지가 적용됐습니다. 그대로 저장해도 됩니다.");
    el.fetchStatus.textContent = `${sourceLabel} 이미지를 적용했습니다.`;
  } catch (_error) {
    el.fetchStatus.textContent = `${sourceLabel} 처리 중 오류가 발생했습니다. 다른 이미지를 다시 선택해주세요.`;
  } finally {
    event.target.value = "";
  }
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => reject(reader.error || new Error("file-read-failed"));
    reader.readAsDataURL(file);
  });
}

function syncImagePreview(sourceLabel = "") {
  const imageUrl = el.wineImage.value.trim();
  if (!imageUrl || !isUsableImageUrl(imageUrl)) {
    el.imagePreviewCard.hidden = true;
    if (el.imagePreviewPlaceholder) {
      el.imagePreviewPlaceholder.hidden = false;
    }
    el.wineImagePreview.removeAttribute("src");
    el.imagePreviewCaption.textContent = imageUrl
      ? "선택된 값이 실제 이미지가 아니라 미리보기를 표시하지 않았습니다. 후보 선택 또는 업로드를 이용해주세요."
      : "자동으로 찾은 후보나 직접 업로드한 이미지를 여기서 확인할 수 있습니다.";
    return;
  }

  el.imagePreviewCard.hidden = false;
  if (el.imagePreviewPlaceholder) {
    el.imagePreviewPlaceholder.hidden = true;
  }
  el.wineImagePreview.src = imageUrl;
  el.imagePreviewCaption.textContent = sourceLabel
    ? `선택된 이미지 출처: ${sourceLabel}`
    : "선택된 이미지 미리보기입니다.";
}
async function persistPersona(persona) {
  if (!state.supabase) {
    return;
  }

  await state.supabase.from("personas").upsert({
    id: persona.id,
    name: persona.name,
    role: persona.summary || buildPersonaCharacterSummary(persona),
    focus: "",
    red_taste: persona.tastes.red,
    white_taste: persona.tastes.white,
    display_order: state.personas.findIndex((item) => item.id === persona.id)
  });
}

function buildPersonaCharacterSummary(persona) {
  const name = persona?.name || "이 페르소나";
  const red = normalizeTaste(persona?.tastes?.red || {});
  const white = normalizeTaste(persona?.tastes?.white || {});
  const favoritePairs = [...(red.favoritePairs || []), ...(white.favoritePairs || [])]
    .map((pair) => [pair?.varietal, pair?.region].filter(Boolean).join(" - "))
    .filter(Boolean)
    .slice(0, 3);

  const favoriteText = favoritePairs.length ? `${favoritePairs.join(", ")} 계열을 특히 좋아하고, ` : "";
  const redStyle = describeTasteVector(red, "red");
  const whiteStyle = describeTasteVector(white, "white");
  return `${name}은 ${favoriteText}레드에선 ${redStyle}, 화이트에선 ${whiteStyle} 쪽으로 기우는 취향입니다.`;
}

function describeTasteVector(taste, mode) {
  const descriptors = [];
  descriptors.push(taste.acidity <= 3 ? "높은 산도" : taste.acidity >= 5 ? "부드러운 산도" : "균형 잡힌 산도");
  descriptors.push(taste.body <= 3 ? "리치한 바디" : taste.body >= 5 ? "린한 바디" : "중간 바디");
  descriptors.push(taste.oak <= 3 ? "뉴 오크 성향" : taste.oak >= 5 ? "뉴트럴 오크 성향" : "오크 균형");
  descriptors.push(taste.fruitDriven <= 3 ? "과실 중심" : taste.fruitDriven >= 5 ? "세이보리/어시한 결" : "과실과 세이보리의 균형");
  if (mode === "white") {
    descriptors.push(taste.fruitProfile <= 3 ? "트로피컬 과실 뉘앙스" : taste.fruitProfile >= 5 ? "시트러스 중심" : "트로피컬과 시트러스의 중간");
  } else {
    descriptors.push(taste.fruitProfile <= 3 ? "다크 프루트 쪽" : taste.fruitProfile >= 5 ? "레드 프루트 쪽" : "레드/다크 프루트의 중간");
  }
  return descriptors.slice(0, 3).join(", ");
}

async function persistPersonaDelete(personaId) {
  if (!state.supabase) {
    return;
  }

  await state.supabase.from("personas").delete().eq("id", personaId);
}

async function persistReviewCreate(wine, review) {
  if (!state.supabase) {
    return null;
  }

  await state.supabase.from("wines").upsert({
    id: wine.id,
    name: wine.name,
    producer: wine.producer,
    vintage: wine.vintage,
    type: wine.type,
    varietal: wine.varietal,
    region: wine.region,
    average_price: wine.averagePrice,
    image_url: wine.image
  });

  const { data, error } = await state.supabase.from("reviews").insert({
    wine_id: wine.id,
    persona_id: review.personaId,
    note: review.note,
    summary: review.summary,
    overall_score: review.overallScore,
    structure: review.structure,
    primary_aromas: review.primaryAromas,
    secondary_aromas: review.secondaryAromas,
    tertiary_aromas: review.tertiaryAromas,
    created_at: review.createdAt
  }).select("id").single();

  if (error) {
    console.error(error);
    return null;
  }

  return data;
}

async function persistReviewUpdate(wine, review) {
  if (!state.supabase) {
    return;
  }

  await state.supabase.from("wines").upsert({
    id: wine.id,
    name: wine.name,
    producer: wine.producer,
    vintage: wine.vintage,
    type: wine.type,
    varietal: wine.varietal,
    region: wine.region,
    average_price: wine.averagePrice,
    image_url: wine.image
  });

  await state.supabase.from("reviews").update({
    persona_id: review.personaId,
    note: review.note,
    summary: review.summary,
    overall_score: review.overallScore,
    structure: review.structure,
    primary_aromas: review.primaryAromas,
    secondary_aromas: review.secondaryAromas,
    tertiary_aromas: review.tertiaryAromas,
    created_at: review.createdAt
  }).eq("id", review.id);
}

async function persistReviewDelete(wineId, reviewId, deleteWineToo) {
  if (!state.supabase) {
    return;
  }

  await state.supabase.from("reviews").delete().eq("id", reviewId);
  if (deleteWineToo) {
    await state.supabase.from("wines").delete().eq("id", wineId);
  }
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"]/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;"
  }[char]));
}

function makePlaceholderImage(title, start, end) {
  const safe = title.replace(/[&<>]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[char]));
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="${start}"/><stop offset="100%" stop-color="${end}"/></linearGradient></defs><rect width="800" height="600" rx="42" fill="url(#g)"/><circle cx="650" cy="120" r="110" fill="rgba(255,255,255,0.16)"/><circle cx="130" cy="520" r="160" fill="rgba(255,255,255,0.10)"/><text x="60" y="285" font-size="44" font-family="Georgia,serif" fill="white">${safe}</text><text x="60" y="340" font-size="24" font-family="sans-serif" fill="rgba(255,255,255,0.86)">VVR · Vintage Varietal Region</text></svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function cryptoRandomId() {
  if (window.crypto?.randomUUID) {
    return window.crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function slugifyPersonaId(value) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
