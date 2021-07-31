/* generated by Svelte v3.38.3 */
import {
	SvelteComponent,
	append,
	attr,
	children,
	claim_element,
	claim_space,
	claim_text,
	detach,
	element,
	init,
	insert,
	noop,
	safe_not_equal,
	set_data,
	set_style,
	space,
	text
} from '../web_modules/svelte/internal/index.mjs';

function create_fragment(ctx) {
	let div3;
	let div0;
	let h20;
	let t0_value = /*hero*/ ctx[2].pre + "";
	let t0;
	let span0;
	let t1_value = /*hero*/ ctx[2].accent + "";
	let t1;
	let br;
	let t2_value = /*hero*/ ctx[2].post + "";
	let t2;
	let t3;
	let h3;
	let t4_value = /*hero*/ ctx[2].tagline + "";
	let t4;
	let t5;
	let div1;
	let t6;
	let div2;
	let img0;
	let img0_src_value;
	let img0_alt_value;
	let t7;
	let span1;
	let raw0_value = /*image*/ ctx[1].citation.replaceAll("<a ", "<a target='blank' rel='noopener noreferrer'") + "";
	let t8;
	let div7;
	let div4;
	let img1;
	let img1_src_value;
	let img1_alt_value;
	let t9;
	let div6;
	let div5;
	let h21;
	let t10;
	let t11;
	let p;
	let t12;
	let div8;
	let raw2_value = /*splash*/ ctx[3].citation.replaceAll("<a ", "<a target='blank' rel='noopener noreferrer'") + "";

	return {
		c() {
			div3 = element("div");
			div0 = element("div");
			h20 = element("h2");
			t0 = text(t0_value);
			span0 = element("span");
			t1 = text(t1_value);
			br = element("br");
			t2 = text(t2_value);
			t3 = space();
			h3 = element("h3");
			t4 = text(t4_value);
			t5 = space();
			div1 = element("div");
			t6 = space();
			div2 = element("div");
			img0 = element("img");
			t7 = space();
			span1 = element("span");
			t8 = space();
			div7 = element("div");
			div4 = element("div");
			img1 = element("img");
			t9 = space();
			div6 = element("div");
			div5 = element("div");
			h21 = element("h2");
			t10 = text(/*title*/ ctx[0]);
			t11 = space();
			p = element("p");
			t12 = space();
			div8 = element("div");
			this.h();
		},
		l(nodes) {
			div3 = claim_element(nodes, "DIV", { id: true, class: true });
			var div3_nodes = children(div3);
			div0 = claim_element(div3_nodes, "DIV", { class: true, style: true });
			var div0_nodes = children(div0);
			h20 = claim_element(div0_nodes, "H2", { class: true });
			var h20_nodes = children(h20);
			t0 = claim_text(h20_nodes, t0_value);
			span0 = claim_element(h20_nodes, "SPAN", { class: true });
			var span0_nodes = children(span0);
			t1 = claim_text(span0_nodes, t1_value);
			span0_nodes.forEach(detach);
			br = claim_element(h20_nodes, "BR", {});
			t2 = claim_text(h20_nodes, t2_value);
			h20_nodes.forEach(detach);
			t3 = claim_space(div0_nodes);
			h3 = claim_element(div0_nodes, "H3", { class: true });
			var h3_nodes = children(h3);
			t4 = claim_text(h3_nodes, t4_value);
			h3_nodes.forEach(detach);
			div0_nodes.forEach(detach);
			t5 = claim_space(div3_nodes);
			div1 = claim_element(div3_nodes, "DIV", {});
			children(div1).forEach(detach);
			t6 = claim_space(div3_nodes);
			div2 = claim_element(div3_nodes, "DIV", {});
			var div2_nodes = children(div2);
			img0 = claim_element(div2_nodes, "IMG", { class: true, src: true, alt: true });
			t7 = claim_space(div2_nodes);
			span1 = claim_element(div2_nodes, "SPAN", { class: true });
			var span1_nodes = children(span1);
			span1_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			t8 = claim_space(nodes);
			div7 = claim_element(nodes, "DIV", { id: true, class: true });
			var div7_nodes = children(div7);
			div4 = claim_element(div7_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);

			img1 = claim_element(div4_nodes, "IMG", {
				class: true,
				style: true,
				src: true,
				alt: true
			});

			div4_nodes.forEach(detach);
			t9 = claim_space(div7_nodes);
			div6 = claim_element(div7_nodes, "DIV", { class: true, style: true });
			var div6_nodes = children(div6);
			div5 = claim_element(div6_nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			h21 = claim_element(div5_nodes, "H2", { class: true });
			var h21_nodes = children(h21);
			t10 = claim_text(h21_nodes, /*title*/ ctx[0]);
			h21_nodes.forEach(detach);
			div5_nodes.forEach(detach);
			t11 = claim_space(div6_nodes);
			p = claim_element(div6_nodes, "P", { class: true });
			var p_nodes = children(p);
			p_nodes.forEach(detach);
			div6_nodes.forEach(detach);
			div7_nodes.forEach(detach);
			t12 = claim_space(nodes);
			div8 = claim_element(nodes, "DIV", { class: true });
			var div8_nodes = children(div8);
			div8_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(span0, "class", "accent-b");
			attr(h20, "class", "header text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl");
			attr(h3, "class", "tag text-xl sm:text-2xl md:text-4xl");
			attr(div0, "class", "pl-2 md:pl-6 lg:pl-10 xl:pl-16 w-screen-30 sm:w-screen-40 md:w-screen-60 lg:w-screen-70 xl:w-screen-80 absolute");
			set_style(div0, "top", "40%");
			attr(img0, "class", "w-full object-cover object-bottom h-screen-40 sm:h-screen-60 md:h-screen-70 lg:h-screen-80 xl:h-screen-90");
			if (img0.src !== (img0_src_value = "assets/pages/" + /*image*/ ctx[1].src)) attr(img0, "src", img0_src_value);
			attr(img0, "alt", img0_alt_value = /*image*/ ctx[1].alt);
			attr(span1, "class", "text-meta");
			attr(div3, "id", "hero");
			attr(div3, "class", "w-full grid grid-cols-2 relative");
			attr(img1, "class", "w-full object-center object-cover h-screen-80 lg:h-screen-90");
			set_style(img1, "filter", "brightness(60%)");
			if (img1.src !== (img1_src_value = "assets/pages/" + /*splash*/ ctx[3].src)) attr(img1, "src", img1_src_value);
			attr(img1, "alt", img1_alt_value = /*splash*/ ctx[3].alt);
			attr(div4, "class", "w-full pt-16");
			attr(h21, "class", "accent text-white text-4xl font-extrabold ");
			attr(div5, "class", "w-full font-bold text-lg px-6 pt-10");
			attr(p, "class", "text-white text-md sm:text-lg px-6 py-6");
			attr(div6, "class", "absolute ml-2 md:ml-12 xl:mt-6 bg-black bg-opacity-50 w-screen-40 sm:w-screen-70 xl:w-screen-80 h-screen-70");
			set_style(div6, "top", "14%");
			set_style(div6, "overflow-y", "auto");
			attr(div7, "id", "about");
			attr(div7, "class", "relative");
			attr(div8, "class", "text-meta relative block");
		},
		m(target, anchor) {
			insert(target, div3, anchor);
			append(div3, div0);
			append(div0, h20);
			append(h20, t0);
			append(h20, span0);
			append(span0, t1);
			append(h20, br);
			append(h20, t2);
			append(div0, t3);
			append(div0, h3);
			append(h3, t4);
			append(div3, t5);
			append(div3, div1);
			append(div3, t6);
			append(div3, div2);
			append(div2, img0);
			append(div2, t7);
			append(div2, span1);
			span1.innerHTML = raw0_value;
			insert(target, t8, anchor);
			insert(target, div7, anchor);
			append(div7, div4);
			append(div4, img1);
			append(div7, t9);
			append(div7, div6);
			append(div6, div5);
			append(div5, h21);
			append(h21, t10);
			append(div6, t11);
			append(div6, p);
			p.innerHTML = /*articleBody*/ ctx[4];
			insert(target, t12, anchor);
			insert(target, div8, anchor);
			div8.innerHTML = raw2_value;
		},
		p(ctx, [dirty]) {
			if (dirty & /*hero*/ 4 && t0_value !== (t0_value = /*hero*/ ctx[2].pre + "")) set_data(t0, t0_value);
			if (dirty & /*hero*/ 4 && t1_value !== (t1_value = /*hero*/ ctx[2].accent + "")) set_data(t1, t1_value);
			if (dirty & /*hero*/ 4 && t2_value !== (t2_value = /*hero*/ ctx[2].post + "")) set_data(t2, t2_value);
			if (dirty & /*hero*/ 4 && t4_value !== (t4_value = /*hero*/ ctx[2].tagline + "")) set_data(t4, t4_value);

			if (dirty & /*image*/ 2 && img0.src !== (img0_src_value = "assets/pages/" + /*image*/ ctx[1].src)) {
				attr(img0, "src", img0_src_value);
			}

			if (dirty & /*image*/ 2 && img0_alt_value !== (img0_alt_value = /*image*/ ctx[1].alt)) {
				attr(img0, "alt", img0_alt_value);
			}

			if (dirty & /*image*/ 2 && raw0_value !== (raw0_value = /*image*/ ctx[1].citation.replaceAll("<a ", "<a target='blank' rel='noopener noreferrer'") + "")) span1.innerHTML = raw0_value;;

			if (dirty & /*splash*/ 8 && img1.src !== (img1_src_value = "assets/pages/" + /*splash*/ ctx[3].src)) {
				attr(img1, "src", img1_src_value);
			}

			if (dirty & /*splash*/ 8 && img1_alt_value !== (img1_alt_value = /*splash*/ ctx[3].alt)) {
				attr(img1, "alt", img1_alt_value);
			}

			if (dirty & /*title*/ 1) set_data(t10, /*title*/ ctx[0]);
			if (dirty & /*articleBody*/ 16) p.innerHTML = /*articleBody*/ ctx[4];;
			if (dirty & /*splash*/ 8 && raw2_value !== (raw2_value = /*splash*/ ctx[3].citation.replaceAll("<a ", "<a target='blank' rel='noopener noreferrer'") + "")) div8.innerHTML = raw2_value;;
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(div3);
			if (detaching) detach(t8);
			if (detaching) detach(div7);
			if (detaching) detach(t12);
			if (detaching) detach(div8);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { title } = $$props,
		{ image } = $$props,
		{ hero } = $$props,
		{ splash } = $$props,
		{ articleBody } = $$props;

	$$self.$$set = $$props => {
		if ("title" in $$props) $$invalidate(0, title = $$props.title);
		if ("image" in $$props) $$invalidate(1, image = $$props.image);
		if ("hero" in $$props) $$invalidate(2, hero = $$props.hero);
		if ("splash" in $$props) $$invalidate(3, splash = $$props.splash);
		if ("articleBody" in $$props) $$invalidate(4, articleBody = $$props.articleBody);
	};

	return [title, image, hero, splash, articleBody];
}

class Component extends SvelteComponent {
	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			title: 0,
			image: 1,
			hero: 2,
			splash: 3,
			articleBody: 4
		});
	}
}

export default Component;