<script>
  import OdsScrollStory from './components/widget-prototype/OdsScrollStory.svelte'
  import OdsScrollChapter from './components/widget-prototype/OdsScrollChapter.svelte'
</script>

  <ods-dataset-context context="velo, coupures" velo-domain="data.opendatasoft.com" coupures-domain="data.opendatasoft.com" velo-dataset="amenagements-velo-en-ile-de-france@datailedefrance" coupures-dataset="coupures-urbaines-dile-de-france0@datailedefrance">
    <OdsScrollStory>
      <div id="features" slot="features">
        <div id="cycle-map" class="map-wrapper">
          <ods-map class="map" location="10,48.831,2.349" scroll-wheel-zoom="0" display-control="0">
            <ods-map-layer context="velo" color="#128317"></ods-map-layer>
          </ods-map>
        </div>
        <div id="coupures" class="map-wrapper">
          <ods-map class="map" location="10,48.831,2.349" scroll-wheel-zoom="0" display-control="0">
            <ods-map-layer context="coupures" color="#ba681c"></ods-map-layer>
          </ods-map>
        </div>
        <div id="fluvial" class="map-wrapper">
          <ods-map class="map" location="12,48.831,2.349" scroll-wheel-zoom="0" display-control="0">
            <ods-map-layer context="velo" color="#128317"></ods-map-layer>
            <ods-map-layer context="coupures" color="#ba681c"></ods-map-layer>
          </ods-map>
        </div>
        <div id="feroviaire" class="map-wrapper">
          <ods-map class="map" location="15,48.936,2.440" scroll-wheel-zoom="0" display-control="0">
            <ods-map-layer context="velo" color="#128317"></ods-map-layer>
            <ods-map-layer context="coupures" color="#ba681c"></ods-map-layer>
          </ods-map>
        </div>
      </div>
      <div id="chapters" class="righty chapters" slot="chapters">
        <OdsScrollChapter id="idf"
          activeClass="active-chapter"
          featureId="cycle-map"
          featureActiveClass="slide-in">
          <h3>Pistes cyclables en idf</h3>
          <p>Mais il y a aussi beaucoup de coupures, qui empêchent clairement de faire du vélo</p>
        </OdsScrollChapter>
        <OdsScrollChapter activeClass="active-chapter" id="coupures">
          <h3>Coupures</h3>
          <p>Mais il y a aussi beaucoup de coupures, qui empêchent clairement de faire du vélo</p>
        </OdsScrollChapter>
        <OdsScrollChapter activeClass="active-chapter" id="fluvial">
          <h3>Coupures Fluvial</h3>
          <p>Les berges sont souvent idéales pour l\'aménagement de pistes cyclables, mais les ports restent un obstacle majeur</p>
        </OdsScrollChapter>
        <OdsScrollChapter activeClass="active-chapter" id="feroviaire">
          <h3>Coupure Ferroviaires</h3>
          <p>Les installations ferroviaires (gares, ateliers, voies de remisage etc.), créent aussi de grand "déserts", difficiles à contourner en vélo</p>
        </OdsScrollChapter>
      </div>
    </OdsScrollStory>
  </ods-dataset-context>
