<script>
  import Search from "../components/search.svelte";
  import Social from "../components/social.svelte";

  export let allPosts, socialLinks;
</script>

<aside class="w-full">
  <div class="pl-0 pl-lg-4">
    <!-- Search -->
    <Search {allPosts} />

    <!-- Social -->
    <Social {socialLinks} />

    <!-- categories -->
    <div class="row">
      <h4 class="header mb-1"><span>Categories</span></h4>
      <ul class="text-aside mb-4">
        <li>
          <a href="catgs/four-seasons" class="inline-flex"
            >Four seasons
            <small class="ml-auto">(1)</small></a
          >
        </li>
        <li>
          <a href="catgs/newyork-city" class="inline-flex"
            >Newyork city
            <small class="ml-auto">(2)</small></a
          >
        </li>
        <li>
          <a href="catgs/photobooth" class="inline-flex"
            >Photobooth
            <small class="ml-auto">(1)</small></a
          >
        </li>
        <li>
          <a href="catgs/photography" class="inline-flex"
            >Photography
            <small class="ml-auto">(2)</small></a
          >
        </li>
        <li>
          <a href="catgs/videography" class="inline-flex"
            >Videography
            <small class="ml-auto">(1)</small></a
          >
        </li>
      </ul>
    </div>

    <!-- tags -->
    <div class="row">
      <h4 class="header mb-1 w-full flex">Tags</h4>
      <ul class="text-aside mb-4">
        <li class="pr-1 inline-flex">
          <a href="tags/booth">Booth,</a>
        </li>
        <li class="pr-1 inline-flex">
          <a href="tags/city">City,</a>
        </li>
        <li class="pr-1 inline-flex">
          <a href="tags/image">Image,</a>
        </li>
        <li class="pr-1 inline-flex">
          <a href="tags/new">Nature,</a>
        </li>
        <li class="pr-1 inline-flex">
          <a href="tags/photo">Photo,</a>
        </li>
        <li class="pr-1 inline-flex">
          <a href="tags/video">Video</a>
        </li>
      </ul>
    </div>
  </div>
</aside>
