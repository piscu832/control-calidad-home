(function() {
  function initVillalbaTimeline() {
    var root = document.getElementById("wp-villalba-timeline");
    if (!root) return;
    var milestones = [
      {
        num: "01",
        year: "1966",
        title: "Fundaci\u00f3n",
        desc: "Nace el taller metal\u00fargico y salen los primeros implantes de osteos\u00edntesis.",
        detail: "Todo empez\u00f3 en el taller: metalurgia aplicada a la cirug\u00eda ortop\u00e9dica. All\u00ed se fijaron la precisi\u00f3n y el control de calidad que sostienen los 60 a\u00f1os siguientes.",
        tagLabel: "Industria metal\u00fargica",
        tagClass: "tl-tag-I"
      },
      {
        num: "02",
        year: "1986",
        title: "L\u00ednea de cadera",
        desc: "Se suman los implantes de cadera al cat\u00e1logo de producci\u00f3n propia.",
        detail: "Con la experiencia en osteos\u00edntesis, la planta dio el salto a una de las cirug\u00edas de reemplazo m\u00e1s demandadas.",
        tagLabel: "Industria metal\u00fargica",
        tagClass: "tl-tag-I"
      },
      {
        num: "03",
        year: "1996",
        title: "L\u00ednea de rodilla",
        desc: "La fabricaci\u00f3n se ampl\u00eda a pr\u00f3tesis e implantes de rodilla.",
        detail: "La rodilla complet\u00f3 la oferta en articulaciones y consolid\u00f3 el cat\u00e1logo ortop\u00e9dico de la empresa.",
        tagLabel: "Industria metal\u00fargica",
        tagClass: "tl-tag-I"
      },
      {
        num: "04",
        year: "2006",
        title: "L\u00ednea de columna",
        desc: "Se incorpora el sistema de implantes para cirug\u00eda de columna.",
        detail: "Una especialidad de alta exigencia t\u00e9cnica, que ampli\u00f3 el v\u00ednculo con los equipos quir\u00fargicos.",
        tagLabel: "Industria metal\u00fargica",
        tagClass: "tl-tag-I"
      },
      {
        num: "05",
        year: "2016",
        title: "\u00c1rea comercial",
        desc: "Se crea la estructura de comercio para llegar a cl\u00ednicas y cirujanos.",
        detail: "La empresa pas\u00f3 de fabricar a acompa\u00f1ar al cirujano: asesoramiento, instrumental y atenci\u00f3n directa.",
        tagLabel: "Comercio",
        tagClass: "tl-tag-C"
      },
      {
        num: "06",
        year: "2026",
        title: "Log\u00edstica propia",
        desc: "La distribuci\u00f3n integrada completa el ciclo: fabricar, vender y entregar.",
        detail: "Entregar a tiempo es parte del producto. La log\u00edstica propia cierra el ciclo y lleva el implante al quir\u00f3fano.",
        tagLabel: "Log\u00edstica",
        tagClass: "tl-tag-L"
      }
    ];
    var state = { offset: 0, hover: -1, open: -1, visibleCount: 4 };
    var itemsTrack = root.querySelector("#tlItemsTrack");
    var itemEls = Array.prototype.slice.call(root.querySelectorAll(".tl-item"));
    var trackFill = root.querySelector("#tlTrackFill");
    var rangeText = root.querySelector("#tlRangeText");
    var btnPrev = root.querySelector("#tlBtnPrev");
    var btnNext = root.querySelector("#tlBtnNext");
    var overlay = root.querySelector("#tlDetailOverlay");
    var ovVisual = root.querySelector(".tl-ov-visual");
    var ovImg = root.querySelector("#tlOvImg");
    var ovNum = root.querySelector("#tlOvNum");
    var ovTag = root.querySelector("#tlOvTag");
    var ovYear = root.querySelector("#tlOvYear");
    var ovTitle = root.querySelector("#tlOvTitle");
    var ovDesc = root.querySelector("#tlOvDesc");
    var ovDetail = root.querySelector("#tlOvDetail");
    var ovCount = root.querySelector("#tlOvCount");
    var ovClose = root.querySelector("#tlOvClose");
    var ovPrev = root.querySelector("#tlOvPrev");
    var ovNext = root.querySelector("#tlOvNext");
    function getVisibleCount() {
      var w = window.innerWidth;
      if (600 >= w) return 1;
      if (900 >= w) return 2;
      if (1180 >= w) return 3;
      return 4;
    }
    function getMaxOffset() {
      return Math.max(0, milestones.length - state.visibleCount);
    }
    function render() {
      state.visibleCount = getVisibleCount();
      var maxOffset = getMaxOffset();
      if (state.offset > maxOffset) state.offset = maxOffset;
      if (0 > state.offset) state.offset = 0;
      var shiftPx = 0;
      if (itemEls.length > 0 && state.offset > 0) {
        var firstRect = itemEls[0].getBoundingClientRect();
        var gapPx = 28;
        shiftPx = -state.offset * (firstRect.width + gapPx);
      }
      if (itemsTrack) {
        itemsTrack.style.transform = "translateX(" + shiftPx + "px)";
      }
      var fillPct = maxOffset > 0 ? 30 + (state.offset / maxOffset) * 70 : 100;
      if (trackFill) {
        trackFill.style.width = fillPct + "%";
      }
      var startIdx = state.offset + 1;
      var endIdx = Math.min(milestones.length, state.offset + state.visibleCount);
      if (rangeText) {
        rangeText.textContent = startIdx + "-" + endIdx + " de " + milestones.length;
      }
      if (btnPrev) btnPrev.classList.toggle("is-disabled", state.offset === 0);
      if (btnNext) btnNext.classList.toggle("is-disabled", state.offset >= maxOffset);
      itemEls.forEach(function(el, i) {
        el.classList.toggle("is-hovered", state.hover === i);
        el.classList.toggle("is-dimmed", state.hover !== -1 && state.hover !== i);
      });
      var isOpen = state.open >= 0 && milestones.length > state.open;
      if (overlay) {
        overlay.classList.toggle("is-open", isOpen);
        overlay.setAttribute("aria-hidden", isOpen ? "false" : "true");
      }
      var currentIdx = isOpen ? state.open : 0;
      var cur = milestones[currentIdx];
      if (ovNum) ovNum.textContent = cur.num;
      if (ovYear) ovYear.textContent = cur.year;
      if (ovTitle) ovTitle.textContent = cur.title;
      if (ovDesc) ovDesc.textContent = cur.desc;
      if (ovDetail) ovDetail.textContent = cur.detail;
      if (ovCount) ovCount.textContent = (currentIdx + 1) + " de " + milestones.length;
      if (ovTag) {
        ovTag.textContent = cur.tagLabel;
        ovTag.className = "tl-tag-pill " + cur.tagClass;
      }
      var popImg = itemEls[currentIdx] ? itemEls[currentIdx].querySelector(".tl-pop-img") : null;
      var imgSrc = popImg ? popImg.getAttribute("src") : "";
      var isSafeImg = imgSrc && (/^data:image\/(jpeg|png|webp);base64,[A-Za-z0-9+/=]+$/.test(imgSrc) || /^Im\u00e1genes Hitos\/[A-Za-z0-9_.\-]+\.(jpg|jpeg|png|webp|jfif)$/i.test(imgSrc));
      if (ovImg && ovVisual) {
        if (isSafeImg) {
          ovImg.setAttribute("src", imgSrc);
          ovImg.setAttribute("alt", cur.year + " - " + cur.title);
          ovImg.classList.add("has-img");
          ovVisual.classList.add("has-photo");
        } else {
          ovImg.removeAttribute("src");
          ovImg.classList.remove("has-img");
          ovVisual.classList.remove("has-photo");
        }
      }
      if (ovPrev) ovPrev.classList.toggle("is-disabled", currentIdx === 0);
      if (ovNext) ovNext.classList.toggle("is-disabled", currentIdx >= milestones.length - 1);
    }
    function closeOverlay() {
      if (0 > state.open) return;
      var ci = state.open;
      var maxOffset = getMaxOffset();
      var nextOffset = state.offset;
      if (state.offset > ci) {
        nextOffset = ci;
      } else if (ci > state.offset + state.visibleCount - 1) {
        nextOffset = ci - (state.visibleCount - 1);
      }
      state.open = -1;
      state.hover = -1;
      state.offset = Math.min(maxOffset, Math.max(0, nextOffset));
      render();
    }
    itemEls.forEach(function(el, idx) {
      el.addEventListener("mouseenter", function() {
        state.hover = idx;
        render();
      });
      el.addEventListener("mouseleave", function() {
        state.hover = -1;
        render();
      });
      el.addEventListener("click", function() {
        state.open = idx;
        state.hover = -1;
        render();
      });
    });
    var lastActionTs = 0;
    function allowAction() {
      var now = Date.now();
      if (80 > now - lastActionTs) return false;
      lastActionTs = now;
      return true;
    }
    if (btnPrev) {
      btnPrev.addEventListener("click", function() {
        if (!allowAction()) return;
        if (state.offset > 0) {
          state.offset -= 1;
          state.hover = -1;
          render();
        }
      });
    }
    if (btnNext) {
      btnNext.addEventListener("click", function() {
        if (!allowAction()) return;
        var maxOff = getMaxOffset();
        if (maxOff > state.offset) {
          state.offset += 1;
          state.hover = -1;
          render();
        }
      });
    }
    if (ovClose) {
      ovClose.addEventListener("click", closeOverlay);
    }
    if (ovPrev) {
      ovPrev.addEventListener("click", function() {
        if (!allowAction()) return;
        if (state.open > 0) {
          state.open -= 1;
          render();
        }
      });
    }
    if (ovNext) {
      ovNext.addEventListener("click", function() {
        if (!allowAction()) return;
        if (milestones.length - 1 > state.open) {
          state.open += 1;
          render();
        }
      });
    }
    document.addEventListener("keydown", function(e) {
      if (state.open >= 0) {
        if (e.key === "Escape") {
          closeOverlay();
        } else if (e.key === "ArrowLeft" && state.open > 0) {
          state.open -= 1;
          render();
        } else if (e.key === "ArrowRight" && milestones.length - 1 > state.open) {
          state.open += 1;
          render();
        }
      }
    });
    window.addEventListener("resize", function() {
      render();
    });
    render();
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initVillalbaTimeline);
  } else {
    initVillalbaTimeline();
  }
})();
