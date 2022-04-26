<script>
  import Error from '$lib/notion2svelte/Error.svelte';
  import Cover from '$lib/notion2svelte/Cover.svelte';
  import Title from '$lib/notion2svelte/Title.svelte';
  import BulletedListItem from '$lib/notion2svelte/BulletedListItem.svelte';
  import Callout from '$lib/notion2svelte/Callout.svelte';
  import ChildPage from '$lib/notion2svelte/ChildPage.svelte';
  import Code from '$lib/notion2svelte/Code.svelte';
  import ColumnList from '$lib/notion2svelte/ColumnList.svelte';
  import Column from '$lib/notion2svelte/Column.svelte';
  import Divider from '$lib/notion2svelte/Divider.svelte';
  import Embed from '$lib/notion2svelte/Embed.svelte';
  import Header from '$lib/notion2svelte/Header.svelte';
  import Image from '$lib/notion2svelte/Image.svelte';
  import IndentGroup from '$lib/notion2svelte/IndentGroup.svelte';
  import InlineCode from '$lib/notion2svelte/InlineCode.svelte';
  import InlineColor from '$lib/notion2svelte/InlineColor.svelte';
  import Equation from '$lib/notion2svelte/Equation.svelte';
  import Link from '$lib/notion2svelte/Link.svelte';
  import NumberedListItem from '$lib/notion2svelte/NumberedListItem.svelte';
  import Paragraph from '$lib/notion2svelte/Paragraph.svelte';
  import Quote from '$lib/notion2svelte/Quote.svelte';
  import TodoItem from '$lib/notion2svelte/TodoItem.svelte';
  import Toggle from '$lib/notion2svelte/Toggle.svelte';

  import { setContext } from 'svelte';

  setContext('pageStuff', {
    pageId: '8b23e77d88a6400283c7a9e0448f97aa',
    title: 'The North Tower',
    coverAltText:
      'The top of the north tower of the Golden Gate Bridge, peeking out from a sunset-painted fog.',
    coverCreditAuthor: 'Riley, with modifications',
    coverCreditURL: 'https://unsplash.com/photos/eEljzRILh4I'
  });
</script>

<svelte:head>
  <title>The North Tower</title>
</svelte:head>

<Cover
  coverURL={'/assets/TheStoryteller/Book/0/Prolog/the-north-tower/cover.jpg'}
  iconEmojiOrURL={'undefined'}
/>
<Title>The North Tower</Title>

<Paragraph
  blockProps={{
    pageId: '8b23e77d88a6400283c7a9e0448f97aa',
    id: 'e91df843-e16c-479a-89da-7ca7f3d32aa7',
    created_time: '2022-04-13T21:57:00.000Z',
    last_edited_time: '2022-04-22T21:40:00.000Z'
  }}
>
  A lone ambulance parks itself at the base of the north tower. Somewhere buried in the fog, police
  cruisers have set up a barricade; This borders on pure formality in a city with fewer than one in
  a thousand manual-navigation vehicles. Habituated to long waits during suicide negotiations, two
  EMTs sit in the cab, staring at opposite ends of a three-level chess board.
</Paragraph>
<Paragraph
  blockProps={{
    pageId: '8b23e77d88a6400283c7a9e0448f97aa',
    id: 'e6a61f27-6e92-4d10-866a-4410f4e0268f',
    created_time: '2022-04-13T21:57:00.000Z',
    last_edited_time: '2022-04-13T21:57:00.000Z'
  }}
>
  Suruchi has just lost a pawn. Forehead tight and lips pursed, she stares at Mark's dark, brooding
  zombies, looking for a weakness. As she considers drawing out his queen from its perch on the
  lower level, her fingers hover over a beautifully-rendered, seahorse-like knight at mid-level. The
  knight breathes sparks and tightens the curve of its tail in anticipation. But just as she reaches
  to pick it up by the neck, the cab gives a thunderous lurch and her hand sends both dragons and
  zombies flying.
</Paragraph>
<Paragraph
  blockProps={{
    pageId: '8b23e77d88a6400283c7a9e0448f97aa',
    id: '64a3868c-2706-4c49-a24e-5ed895c9c51f',
    created_time: '2022-04-13T21:57:00.000Z',
    last_edited_time: '2022-04-13T21:57:00.000Z'
  }}
>
  “Jesus Christ!” Suruchi shouts into the silence that follows, clutching her chest and breathing
  hard. Mark stares at her, wide-eyed, through the dark lenses of his port. The dense, ice-crystal
  fog of El Blanco rolls by outside the ambulance windows, glowing mildly under the vehicle's fog
  lights. Mark relaxes his face and, in typical fashion, hides his feelings behind a joke.
</Paragraph>
<Paragraph
  blockProps={{
    pageId: '8b23e77d88a6400283c7a9e0448f97aa',
    id: '35dc8568-310c-4dc5-89de-e269351bd48c',
    created_time: '2022-04-13T21:57:00.000Z',
    last_edited_time: '2022-04-13T21:57:00.000Z'
  }}
>
  “Hey, no need to forfeit, Rooch. You weren't losing <em>that</em> bad!”
</Paragraph>
<Paragraph
  blockProps={{
    pageId: '8b23e77d88a6400283c7a9e0448f97aa',
    id: '4d72150f-c9d6-4603-a3b2-d170b10b8a68',
    created_time: '2022-04-13T21:57:00.000Z',
    last_edited_time: '2022-04-22T21:41:00.000Z'
  }}
>
  Suruchi just stares at him. He sighs, nodding. With two fingers held out like an airline attendant
  marking the exits, he makes a sliding motion along the chess board's edge, revealing a simple
  control panel. He pinches a small cartoon magnet to make the pieces fly back into place.
</Paragraph>
<Paragraph
  blockProps={{
    pageId: '8b23e77d88a6400283c7a9e0448f97aa',
    id: '6dc411af-4632-467a-8403-4ac2290fce88',
    created_time: '2022-04-13T21:57:00.000Z',
    last_edited_time: '2022-04-22T21:45:00.000Z'
  }}
>
  “To be continued,” he says, squeezing the board between open palms until it's the size of a
  baseball. He shifts it to the dashboard with a wave, opens the passenger-side door, and steps down
  to the road. Suruchi takes a deep breath and steps out from behind the override-wheel.
</Paragraph>
<Paragraph
  blockProps={{
    pageId: '8b23e77d88a6400283c7a9e0448f97aa',
    id: 'c802cd80-7a86-4037-8bb8-9c77a756a906',
    created_time: '2022-04-13T21:57:00.000Z',
    last_edited_time: '2022-04-13T21:57:00.000Z'
  }}
>
  “I think it came from the back,” Mark calls from the other side of the truck. “Oh fuuuuu…. Yep.
  That would do it…”
</Paragraph>
<Paragraph
  blockProps={{
    pageId: '8b23e77d88a6400283c7a9e0448f97aa',
    id: 'd3f55812-7b6a-4f6b-a279-c9aff2f2f57f',
    created_time: '2022-04-13T21:57:00.000Z',
    last_edited_time: '2022-04-15T05:08:00.000Z'
  }}
>
  Approaching the ambulance tail lights, Suruchi knows what she will find, and she desperately hopes
  that she's wrong. Sure enough, the negotiations have failed. There are the limbs, resting at
  impossible angles. There's the head, light hair darkly drenched around a fist-deep crater at the
  back of the skull. Eerily, the body is still breathing, though she knows this won't last long.
</Paragraph>
<Paragraph
  blockProps={{
    pageId: '8b23e77d88a6400283c7a9e0448f97aa',
    id: '51283802-4ea1-4b28-9836-48d3f384e3e7',
    created_time: '2022-04-13T21:57:00.000Z',
    last_edited_time: '2022-04-22T22:01:00.000Z'
  }}
>
  This isn't Mark's first ride, but it is his first year on the road, and he's hanging back, aghast.
  Uncertain.
</Paragraph>
<Paragraph
  blockProps={{
    pageId: '8b23e77d88a6400283c7a9e0448f97aa',
    id: 'b6561640-60b8-41c0-9731-62565823f6c6',
    created_time: '2022-04-13T21:57:00.000Z',
    last_edited_time: '2022-04-13T21:57:00.000Z'
  }}
>
  “You ok?”
</Paragraph>
<Paragraph
  blockProps={{
    pageId: '8b23e77d88a6400283c7a9e0448f97aa',
    id: 'aee34ac6-59a9-467e-b564-ab28242b602a',
    created_time: '2022-04-13T21:57:00.000Z',
    last_edited_time: '2022-04-13T21:57:00.000Z'
  }}
>
  He nods, but says nothing. He's chewing on his lips. Suruchi has never seen anything like this
  either, but she's seen enough minds blown from “acute lead poisoning” to know she can handle it.
  She nods back.
</Paragraph>
<Paragraph
  blockProps={{
    pageId: '8b23e77d88a6400283c7a9e0448f97aa',
    id: '649dcafb-ff39-4bdf-bd87-2015413ee213',
    created_time: '2022-04-13T21:57:00.000Z',
    last_edited_time: '2022-04-22T22:02:00.000Z'
  }}
>
  “Radio Control that we've got an FTF. I’ll get started on obs.”
</Paragraph>
<Paragraph
  blockProps={{
    pageId: '8b23e77d88a6400283c7a9e0448f97aa',
    id: '4217d17d-77db-4511-bf3e-8a4f2648d452',
    created_time: '2022-04-13T21:57:00.000Z',
    last_edited_time: '2022-04-13T21:57:00.000Z'
  }}
>
  “Failure to fly?” Mark says, rediscovering his tomfool bravado. “I was thinking vehicle
  collision.”
</Paragraph>
<Paragraph
  blockProps={{
    pageId: '8b23e77d88a6400283c7a9e0448f97aa',
    id: '98e792b0-86c8-4769-a635-25527d26f701',
    created_time: '2022-04-13T21:57:00.000Z',
    last_edited_time: '2022-04-22T22:03:00.000Z'
  }}
>
  She raises an unseen eyebrow at him as he walks back to the truck, chuckling to himself.
</Paragraph>
<Paragraph
  blockProps={{
    pageId: '8b23e77d88a6400283c7a9e0448f97aa',
    id: 'dc6ea03e-389f-44be-9267-02db374ff00d',
    created_time: '2022-04-13T21:57:00.000Z',
    last_edited_time: '2022-04-22T22:04:00.000Z'
  }}
>
  “<em>Merc. Headlights,</em>” Suruchi says, subconsciously adjusting her enunciation for the
  benefit of the <em>hgOS</em> listener in her pendant.
</Paragraph>
<Paragraph
  blockProps={{
    pageId: '8b23e77d88a6400283c7a9e0448f97aa',
    id: 'fc95dc86-f91b-40db-9483-d171350176ee',
    created_time: '2022-04-13T21:57:00.000Z',
    last_edited_time: '2022-04-22T22:09:00.000Z'
  }}
>
  The machine pauses for—to it—an eternity (roughly the blink of an eye), waiting for potential
  additions to her request, then, at the speed of light through silicone—through plastic, flesh and
  air—the pendant beams a simple order to the portal on her head. A series of gates opens up,
  freeing millions of pent-up electrons, which stampede like invisible bulls through tiny diodes at
  her temples, knocking loose photons which throw a bright and ghostly glow wherever Suruchi turns
  her head. It's currently aimed at the rig, next to where Mark had been standing, and spotlights a
  circle in which she now sees something wet dripping off the top-most warning beacon at the top
  corner of the box.
</Paragraph>
<Paragraph
  blockProps={{
    pageId: '8b23e77d88a6400283c7a9e0448f97aa',
    id: '87fbf10c-72dd-4f9b-bd92-884dcd654ed4',
    created_time: '2022-04-13T21:57:00.000Z',
    last_edited_time: '2022-04-13T21:57:00.000Z'
  }}
>
  Suruchi climbs up onto the bumper and steps sideways until she's half a meter from the point of
  impact. The roof is dented and…she lets out a long moan. Just above the cracked light, hanging
  from one of the red-painted rivets, a single silver hair. Dangling from that: a small chunk of
  scalp.
</Paragraph>
<Paragraph
  blockProps={{
    pageId: '8b23e77d88a6400283c7a9e0448f97aa',
    id: 'd3e23fc5-bb78-4cb8-8f38-390608bc8a1f',
    created_time: '2022-04-13T21:57:00.000Z',
    last_edited_time: '2022-04-22T22:11:00.000Z'
  }}
>
  Bracing herself with a deep breath, Suruchi hops back down to the road, careful to avoid the
  gleaming spatter-trail of biological shrapnel which—she can now see thanks to her port beams—coats
  the road in a straight line from the rear fender to the fresh corpse…and beyond. Gizzardy bits
  glisten like flecks of thick ink flung from a swinging brush.
</Paragraph>
<Paragraph
  blockProps={{
    pageId: '8b23e77d88a6400283c7a9e0448f97aa',
    id: '55eea541-f6aa-4dc9-9709-39cea5f7c435',
    created_time: '2022-04-13T21:57:00.000Z',
    last_edited_time: '2022-04-26T20:46:00.000Z'
  }}
>
  A shiver trickles through Suruchi's throat and down her chest as she fights off her own
  imagination; It's trying to get her to see a fast-spinning body spraying crushed gray matter and
  bone in a fanning arc. She deflects the thought with a shudder before turning her attention back
  to the body. As she works, she can hear Mark, muted through the fog, talking to dispatch in the
  cab.
</Paragraph>
<Paragraph
  blockProps={{
    pageId: '8b23e77d88a6400283c7a9e0448f97aa',
    id: '637258b2-dc85-46ec-9995-f35a2293f3b7',
    created_time: '2022-04-13T21:57:00.000Z',
    last_edited_time: '2022-04-22T22:16:00.000Z'
  }}
>
  The impact seems to have flipped the body aggressively forward, folding the woman against the
  pavement like a nightmarish rag doll doing yoga: legs spread out in front beneath a gossamer
  sundress; chest nearly to the ground; arms flung forward, one clearly dislocated at the shoulder.
  Stepping around the victim's feet, Suruchi swallows hard to see that the woman's face and bare
  heels have been sand-papered by the road.
</Paragraph>
<Paragraph
  blockProps={{
    pageId: '8b23e77d88a6400283c7a9e0448f97aa',
    id: '76ede89c-55a7-414e-bf95-acdebed78ebe',
    created_time: '2022-04-13T21:57:00.000Z',
    last_edited_time: '2022-04-26T19:12:00.000Z'
  }}
>
  She puts her port in recording mode with a wave, and slowly walks around the body, letting it
  generate a complete cap of the scene: lidar model, color map, infrared, GPS tagging…the whole 8
  meters. Standard procedure.
</Paragraph>
<Paragraph
  blockProps={{
    pageId: '8b23e77d88a6400283c7a9e0448f97aa',
    id: '7a8a03f9-f367-4465-8814-992b12e4e6c0',
    created_time: '2022-04-26T19:12:00.000Z',
    last_edited_time: '2022-04-26T19:14:00.000Z'
  }}
>
  When this is done, she plucks a pair of nitrile gloves from a box inside the truck, and prepares
  to take notes.
</Paragraph>
<Paragraph
  blockProps={{
    pageId: '8b23e77d88a6400283c7a9e0448f97aa',
    id: '41514e5b-0bfd-4d41-8174-ef2ef56ebfc7',
    created_time: '2022-04-26T19:13:00.000Z',
    last_edited_time: '2022-04-26T19:14:00.000Z'
  }}
>
  “<em>Merc. Transcribe.</em>”
</Paragraph>
<Paragraph
  blockProps={{
    pageId: '8b23e77d88a6400283c7a9e0448f97aa',
    id: '8750255d-3ab5-40cb-94e9-11289110f00a',
    created_time: '2022-04-26T19:15:00.000Z',
    last_edited_time: '2022-04-26T19:26:00.000Z'
  }}
>
  A virtual page now hangs in her riph, ready to soak up her thoughts. With careful articulation,
  Suruchi begins her observations, occasionally darting her eyes to the page to check for
  mistranslations.
</Paragraph>
<Paragraph
  blockProps={{
    pageId: '8b23e77d88a6400283c7a9e0448f97aa',
    id: '32f687fd-1272-4354-bfee-4dd79bed6495',
    created_time: '2022-04-26T19:24:00.000Z',
    last_edited_time: '2022-04-26T19:26:00.000Z'
  }}
>
  “Patient found, um, unresponsive with massive head trauma. No pulse. Won't attempt resuss. Patient
  has suffered…” she takes a deep breath, “…um, occipital and interparietal bones have been crushed,
  with visibly irreparable damage to the occipital and parietal lobes, and probably cerebellum.
  Spinal cord likely severed by over-extension of the cervical vertebrae.”
</Paragraph>
<Paragraph
  blockProps={{
    pageId: '8b23e77d88a6400283c7a9e0448f97aa',
    id: 'e52e0d9f-1550-4434-a0d6-e5e69e2ea95d',
    created_time: '2022-04-13T21:57:00.000Z',
    last_edited_time: '2022-04-26T19:31:00.000Z'
  }}
>
  Aside from a few drops of blood, there appears to be no external damage to the woman's back,
  unless you count the spotted-leather build-up of too many sunburns. The skin—visible between twin
  spaghetti straps and along the bare, outstretched arms—has a loose quality to it, like an old
  birthday balloon, or a deflated pregnancy.
</Paragraph>
<Paragraph
  blockProps={{
    pageId: '8b23e77d88a6400283c7a9e0448f97aa',
    id: '1b01620d-f217-456c-bac9-3436b11ebb2d',
    created_time: '2022-04-13T21:57:00.000Z',
    last_edited_time: '2022-04-26T19:32:00.000Z'
  }}
>
  “No portal. No sign of pendant straps,” Suruchi says, with a cursory peak at her notes. Then
  curiosity gets the best of her and she pauses the transcription by twisting her right hand into a
  closed fist, like a conductor silencing the orchestra.
</Paragraph>
<Paragraph
  blockProps={{
    pageId: '8b23e77d88a6400283c7a9e0448f97aa',
    id: '86828394-a9eb-4b78-8cfa-68c64b5dc0c6',
    created_time: '2022-04-13T21:57:00.000Z',
    last_edited_time: '2022-04-26T19:34:00.000Z'
  }}
>
  “Hey, Mark,” she hollers, still crouching, “come give me a hand!”
</Paragraph>
<Paragraph
  blockProps={{
    pageId: '8b23e77d88a6400283c7a9e0448f97aa',
    id: '42f881a4-6d00-44af-bd2e-1bde2357a22a',
    created_time: '2022-04-26T19:34:00.000Z',
    last_edited_time: '2022-04-26T19:53:00.000Z'
  }}
>
  But he's still talking to Control, and she's already lifting from the side, rolling the torso
  heavily up and off the splayed thighs, looking to see if maybe there's a purse or a wallet hiding
  under there. The soft flesh at the back of her throat recoils at the close-up stench of evacuated
  bowels, sealing the passage between her mouth and her olfactory system so that she won't have to
  taste the full pungency of the breeze-blown air.
</Paragraph>
<Paragraph
  blockProps={{
    pageId: '8b23e77d88a6400283c7a9e0448f97aa',
    id: 'bb8f96d7-013d-4574-aecd-771286a31267',
    created_time: '2022-04-13T21:57:00.000Z',
    last_edited_time: '2022-04-26T19:34:00.000Z'
  }}
>
  “<em>Behen</em><em><strong>chod!</strong></em>” Suruchi swears, taking advantage of one of the few
  phrases her parents have passed down to her from her immigrant ancestors. “The poor fucker’s green
  guts are all down her leg…ugh.”
</Paragraph>
<Paragraph
  blockProps={{
    pageId: '8b23e77d88a6400283c7a9e0448f97aa',
    id: 'bb9ade96-f023-4d2d-8b69-69eb433ba791',
    created_time: '2022-04-13T21:57:00.000Z',
    last_edited_time: '2022-04-26T19:35:00.000Z'
  }}
>
  There's plenty here to shock even <em>Suruchi's</em> hardened world view, but the first thing to truly
  grab her attention isn't the face, or what's left of it, nor the horrid mix of body fluids puddled
  in the dark. Instead, her attention zooms in on a thin triangle protruding from the hip. It's unusual
  to see anyone carrying paper these days, but even more unusual to have a functioning pocket in a diaphanous
  dress!
</Paragraph>
<Paragraph
  blockProps={{
    pageId: '8b23e77d88a6400283c7a9e0448f97aa',
    id: 'f909e971-d3c0-4e43-a178-160189b0c2b3',
    created_time: '2022-04-13T21:57:00.000Z',
    last_edited_time: '2022-04-26T19:46:00.000Z'
  }}
>
  Still pushing hard to keep the trunk raised, she slides the paper out. It's a postcard, folded in
  half, with a photograph of somewhere tropical printed on the outside. Suruchi is vaguely aware
  that this is not her purview, but there won't be a chance to look at it later, any more than she
  gets to follow the fates of those who leave her care still alive. Hazard of the job: the mobile
  medic never learns the <em>rest</em> of the story.
</Paragraph>
<Paragraph
  blockProps={{
    pageId: '8b23e77d88a6400283c7a9e0448f97aa',
    id: 'dd8877bf-7b0f-4021-9e9d-ebfd173272e0',
    created_time: '2022-04-13T21:57:00.000Z',
    last_edited_time: '2022-04-26T19:50:00.000Z'
  }}
>
  Flipping the card around and unfolding it, she glances over the street address (no addressee,
  destination: Hawaii) an uncancelled Forever stamp on the right, then focuses on the message on the
  left. It’s brief—just two lines—and, like the address, written in blunt pencil; each letter traced
  and retraced, leaving cuts in the card that cannot be erased.
</Paragraph>
<Quote
  >I LoVe YOU, ●R
  <br />
  I HOPe YOU UNDerSTAND</Quote
><Paragraph
  blockProps={{
    pageId: '8b23e77d88a6400283c7a9e0448f97aa',
    id: 'b03bd554-0bea-457e-ac14-40a2c1312dc8',
    created_time: '2022-04-13T21:57:00.000Z',
    last_edited_time: '2022-04-26T19:59:00.000Z'
  }}
>
  Nonplussed, Suruchi shrugs, refolds the card, and tries to slide it back into the dress pocket.
</Paragraph>
<Paragraph
  blockProps={{
    pageId: '8b23e77d88a6400283c7a9e0448f97aa',
    id: 'e8721b34-56af-45ba-8263-c75dbdbede6e',
    created_time: '2022-04-26T19:59:00.000Z',
    last_edited_time: '2022-04-26T20:01:00.000Z'
  }}
>
  It's much harder to get in than it was to get out, and she finds herself, while wriggling it, she
  sneaks a cheeky peak at the now-exposed mess that used to be a face. She is trying to <em>see</em>
  the injuries without having to actually <em>look</em>, though, perversely, there's not much to
  see: everything resembling a face has been shorn off by the final slide across the asphalt.
</Paragraph>
<Paragraph
  blockProps={{
    pageId: '8b23e77d88a6400283c7a9e0448f97aa',
    id: '4b27b6ff-f60b-4b7b-a5c2-73409c8ba700',
    created_time: '2022-04-13T21:57:00.000Z',
    last_edited_time: '2022-04-13T21:57:00.000Z'
  }}
>
  “Why couldn't you have jumped into the Bay like everyone else?” she grumbles.
</Paragraph>
<Paragraph
  blockProps={{
    pageId: '8b23e77d88a6400283c7a9e0448f97aa',
    id: '347d0021-ee0b-4ec3-aac5-ca75ac042980',
    created_time: '2022-04-13T21:57:00.000Z',
    last_edited_time: '2022-04-13T21:57:00.000Z'
  }}
>
  “Maybe she's afraid of sharks.”
</Paragraph>
<Paragraph
  blockProps={{
    pageId: '8b23e77d88a6400283c7a9e0448f97aa',
    id: 'eab1ecd2-826b-4ca4-b3c9-985d1ad01292',
    created_time: '2022-04-13T21:57:00.000Z',
    last_edited_time: '2022-04-26T20:03:00.000Z'
  }}
>
  Mark's voice is so close in her ear that she rears up, startled, clocking him in the chin so hard
  that his teeth come together with a worrying <em>clack</em>. As Mark stumbles back, face-in-hand,
  Suruchi finds herself standing beside him, still holding the folded postcard. Without thinking,
  she stows it in her own pocket while Mark is still yelling, “Fucking hell, Rooch!” into his cupped
  palms with his eyes shut tight against the pain.
</Paragraph>
<Paragraph
  blockProps={{
    pageId: '8b23e77d88a6400283c7a9e0448f97aa',
    id: '7521700e-3b10-41a1-a086-b66cdcc475a5',
    created_time: '2022-04-13T21:57:00.000Z',
    last_edited_time: '2022-04-26T20:04:00.000Z'
  }}
>
  “Yeah, well…” she says, stifling a snigger. “Don’t creep on me like that! And don't call me
  Rooch.”
</Paragraph>
<Paragraph
  blockProps={{
    pageId: '8b23e77d88a6400283c7a9e0448f97aa',
    id: '4e56f058-1b3e-4db1-9c84-74aa50b9c6d8',
    created_time: '2022-04-13T21:57:00.000Z',
    last_edited_time: '2022-04-26T20:20:00.000Z'
  }}
>
  This makes him laugh, which—still unready to forgive her—he unwisely attempts to stop. The wet
  tissues at the back of his throat can't hold back the pressure from his lungs, and so a good
  amount of air escapes through his nose in a sniggering spray of nasal blood. He pushes his palms
  away from his mouth and stares at the scarlet polka dots now dappling his white nitrile gloves.
</Paragraph>
<Paragraph
  blockProps={{
    pageId: '8b23e77d88a6400283c7a9e0448f97aa',
    id: 'b27c07f7-ad78-4e0f-85ad-7abeccb4ab85',
    created_time: '2022-04-26T20:12:00.000Z',
    last_edited_time: '2022-04-26T20:21:00.000Z'
  }}
>
  There are drops forming on his upper lip and chin, but Suruchi knows he’ll heal soon enough.
  Compared with what she has just seen, Mark’s bloody nose seems like so much stage paint.
</Paragraph>
<Paragraph
  blockProps={{
    pageId: '8b23e77d88a6400283c7a9e0448f97aa',
    id: '5ecc6d32-f244-4916-9a0d-77d8cf73643e',
    created_time: '2022-04-26T20:15:00.000Z',
    last_edited_time: '2022-04-26T20:15:00.000Z'
  }}
>
  “You look like a well-fed vampire,” she teases him.
</Paragraph>
<Paragraph
  blockProps={{
    pageId: '8b23e77d88a6400283c7a9e0448f97aa',
    id: '82f12531-e2ae-40b1-82ee-b2844dc6254a',
    created_time: '2022-04-26T20:15:00.000Z',
    last_edited_time: '2022-04-26T20:15:00.000Z'
  }}
>
  “Fuck you,” is the best he can do.
</Paragraph>
<Paragraph
  blockProps={{
    pageId: '8b23e77d88a6400283c7a9e0448f97aa',
    id: 'da60d02c-c1ba-4b13-8903-199fccaf384f',
    created_time: '2022-04-26T20:36:00.000Z',
    last_edited_time: '2022-04-26T20:39:00.000Z'
  }}
>
  Suruchi’s thoughts travel from vampires to spirits, and a chill traces her spine.
</Paragraph>
<Paragraph
  blockProps={{
    pageId: '8b23e77d88a6400283c7a9e0448f97aa',
    id: 'da8be5a4-c29f-4369-8e5a-e3d945a031f8',
    created_time: '2022-04-13T21:57:00.000Z',
    last_edited_time: '2022-04-26T20:40:00.000Z'
  }}
>
  “Sorry,” she says, not to Mark, but to whatever ghosts might hang here, tangled in the fog.
</Paragraph>
<Paragraph
  blockProps={{
    pageId: '8b23e77d88a6400283c7a9e0448f97aa',
    id: 'b2e6bf33-48bf-4999-b2e4-41233113361a',
    created_time: '2022-04-13T21:57:00.000Z',
    last_edited_time: '2022-04-26T20:40:00.000Z'
  }}
>
  “Good. You should be.”
</Paragraph>
<Paragraph
  blockProps={{
    pageId: '8b23e77d88a6400283c7a9e0448f97aa',
    id: 'b9adc1d6-ea57-4b4e-9226-d47b3fbe3841',
    created_time: '2022-04-26T20:40:00.000Z',
    last_edited_time: '2022-04-26T20:42:00.000Z'
  }}
>
  Mark sounds angry, but he's grinning wide, and shaking from the effort of trying to stay serious.
  Despite a valiant effort, the muscles of his lips lose easily in the reverse tug-of-war against
  his diaphragm, and the sudden spray of jet-powered air nebulizes the drop of blood that he’s
  trying to catch in his hands. Suruchi swears she can feel some of this crimson mist land across
  her cheek, which she wipes against the back of her hand.
</Paragraph>
<Paragraph
  blockProps={{
    pageId: '8b23e77d88a6400283c7a9e0448f97aa',
    id: 'e004296b-1ec5-47a5-826f-9bc13d071981',
    created_time: '2022-04-14T21:26:00.000Z',
    last_edited_time: '2022-04-14T23:55:00.000Z'
  }}
>
  “Chutiya <em>gadhe!”</em>
</Paragraph>
<Paragraph
  blockProps={{
    pageId: '8b23e77d88a6400283c7a9e0448f97aa',
    id: '2a321353-03cc-40f9-84f1-66663c1f685f',
    created_time: '2022-04-14T22:07:00.000Z',
    last_edited_time: '2022-04-26T20:41:00.000Z'
  }}
>
  They explode together then. The laughter feels good, as had the apology. Suruchi has forgotten
  about the hitchhiker in her navy blue cargo slacks. Being nothing more, after all, than worn ink
  and wood pulp, it will come to mind at only the most inopportune of times.
</Paragraph>
<Paragraph
  blockProps={{
    pageId: '8b23e77d88a6400283c7a9e0448f97aa',
    id: '4906a8ed-4993-4ee2-b358-a096325b3c65',
    created_time: '2022-04-14T21:36:00.000Z',
    last_edited_time: '2022-04-26T21:17:00.000Z'
  }}
>
  First, there will be the police officers, including a detective. An inevitable bro-ey banter will
  ensue. Suruchi will join in. Whatever it takes to shake off the oppressive truth lying on the
  road! Then she’ll feel that chill again, drawing her attention to the thing in her pocket. She
  will promise herself to bring it out as soon as the cops ask whether they found anything on the
  body. They will not get the chance.
</Paragraph>
<Paragraph
  blockProps={{
    pageId: '8b23e77d88a6400283c7a9e0448f97aa',
    id: 'c11608e1-695f-4fdc-94b7-40805d182a1b',
    created_time: '2022-04-26T20:57:00.000Z',
    last_edited_time: '2022-04-26T21:25:00.000Z'
  }}
>
  The Fire Chief will arrive, claiming she just had to see this for herself. More banter, and then
  Suruchi will again lose herself in the moment, watching the cops collect flecks of glop from her
  rig—including that grisly strand of scalp-dangled hair—into sterile containers. The Chief will
  suddenly snap back to business, pressing Mark and Suruchi to grab their bags from the ambulance
  and follow her to her cherry-red EUV. As it drives them back to the station, the Chief will
  lecture them on the importance of trauma therapy after “this kind of thing.” Suruchi will realize
  that she has now taken the postcard from the scene. Her chest will slowly swell with guilt, but
  she will pay it no mind as she fills the silence after the speech by converting her notes into a
  formal report. Three members of the SFPD will glide through the City, their arms dancing before
  them, manipulating the soft-space world as seen through their separate ports.
</Paragraph>
<Paragraph
  blockProps={{
    pageId: '8b23e77d88a6400283c7a9e0448f97aa',
    id: '55e5853b-d139-422b-9c7c-f8cbf0e17de6',
    created_time: '2022-04-14T21:46:00.000Z',
    last_edited_time: '2022-04-26T21:33:00.000Z'
  }}
>
  In the steam-filled locker room, Suruchi will stumble on the card while taking off her pants. For
  a moment, she will stare at it blankly as ancient pathways in her brain declare <em
    >trash: something to be recycled</em
  >. Then she’ll hear the shower turn off, retriggering her shame, and Suruchi will plunge the
  contraband into the depths of her gym bag, there to be forgotten once more.
</Paragraph>
<Paragraph
  blockProps={{
    pageId: '8b23e77d88a6400283c7a9e0448f97aa',
    id: 'fdff3dc2-e8e6-4675-9d72-cba9811f3a46',
    created_time: '2022-04-14T08:57:00.000Z',
    last_edited_time: '2022-04-26T21:36:00.000Z'
  }}
>
  After she gets home and empties her duffel into a laundry basket, Suruchi will finally pause to
  give the postcard a good look. Only then will it occur to her that she is carrying someone's
  property. Not the stiff’s, of course. The deceased is now just a pile of doomed meat, incapable of <em
    >owning</em
  >
  anything. But the printed address and the valid postage will argue for a future owner. Someone—someone
  whose name starts with <em>R?</em>—was supposed to receive this message in the mail. Or were they?
</Paragraph>
<Paragraph
  blockProps={{
    pageId: '8b23e77d88a6400283c7a9e0448f97aa',
    id: '650996d1-9e7c-41b8-9b32-9a34efc5f591',
    created_time: '2022-04-14T09:17:00.000Z',
    last_edited_time: '2022-04-26T21:40:00.000Z'
  }}
>
  When Suruchi has exhausted her quiver of unanswerable questions, she will settle on posting the
  card the next morning in the blue box down the street.
</Paragraph>
<Paragraph
  blockProps={{
    pageId: '8b23e77d88a6400283c7a9e0448f97aa',
    id: '0113b7cf-96fb-47f9-9881-15d5c8991045',
    created_time: '2022-04-26T21:40:00.000Z',
    last_edited_time: '2022-04-26T21:56:00.000Z'
  }}
>
  But later, as she startle-wakes from her first attempt at sleep, it will dawn on her that she has,
  technically, <em>robbed a corpse</em>. On <em>federal</em> property.
  <em
    >And everything’s traceable these days. Cameras on every drop box. It's too soon. The FBI and
    SFPD are probably giving the case special scrutiny. After all, it's not every day someone
    splashes their brains across the 101. And cryptic messages hide cryptic motives. What am I
    getting snarled up in?</em
  >
</Paragraph>
<Paragraph
  blockProps={{
    pageId: '8b23e77d88a6400283c7a9e0448f97aa',
    id: 'a41bf9c5-c0a9-4f8a-8dce-00ebc25175c3',
    created_time: '2022-04-14T09:20:00.000Z',
    last_edited_time: '2022-04-26T21:42:00.000Z'
  }}
>
  After a night full of dread-deepening dreams, Suruchi will revise her deadline for mailing the
  card to: Someday. <em>Maybe.</em>
</Paragraph>
<Paragraph
  blockProps={{
    pageId: '8b23e77d88a6400283c7a9e0448f97aa',
    id: '89aaeb1a-466b-4700-9d7d-1d86cf9665ec',
    created_time: '2022-04-13T21:57:00.000Z',
    last_edited_time: '2022-04-26T21:42:00.000Z'
  }}
>
  The postcard will rule the roost, for a time, atop a small stack of non-urgent Things To Do, only
  to be slowly buried by her own keep-sakes, and other half-baked commitments. From there, it will
  eventually make its way into a box, which will maneuver itself into a storage unit. Forgotten.
</Paragraph>
<Image
  url="/assets/TheStoryteller/Book/0/Prolog/the-north-tower/229cdfe8-031b-4555-8c2d-f1bcbbf8dcac.jpg"
/>
<Paragraph
  blockProps={{
    pageId: '8b23e77d88a6400283c7a9e0448f97aa',
    id: '92073917-88fe-45f2-b637-7e249920edcc',
    created_time: '2022-04-13T21:57:00.000Z',
    last_edited_time: '2022-04-14T23:48:00.000Z'
  }}
>
  Eventually.
</Paragraph>
<Paragraph
  blockProps={{
    pageId: '8b23e77d88a6400283c7a9e0448f97aa',
    id: 'fd09329b-7fb7-44d5-a23b-247d290cc1b9',
    created_time: '2022-04-14T23:48:00.000Z',
    last_edited_time: '2022-04-26T21:48:00.000Z'
  }}
>
  But for now, Suruchi and Mark are having a good laugh as she fetches supplies to help him mop up.
  “Medic!” he hollers as another carmine drop splashes into his cupped, albescent palm.
</Paragraph>
<Paragraph
  blockProps={{
    pageId: '8b23e77d88a6400283c7a9e0448f97aa',
    id: 'b3d1571c-5556-44a8-95f6-48b00d0bcc81',
    created_time: '2022-04-13T21:57:00.000Z',
    last_edited_time: '2022-04-26T21:51:00.000Z'
  }}
>
  She pops open a kit and starts mopping him up as a set of red-white-and-blues pulls loose from the
  row of throbbing emergency lights that make up the distant barricade. It eventually resolves into
  a slow-rolling police cruiser, lazily crunches the gravel, stopping a few meters away. Its day
  runners bring fresh illumination to the gruesome scene.
</Paragraph>
<Paragraph
  blockProps={{
    pageId: '8b23e77d88a6400283c7a9e0448f97aa',
    id: '0a29eb8a-6638-4a72-a54b-d19bbbda79a6',
    created_time: '2022-04-13T21:57:00.000Z',
    last_edited_time: '2022-04-26T21:52:00.000Z'
  }}
>
  As Mark sidles over to greet the newcomers, Suruchi stares off in the other direction, out toward
  the pitch-black ocean that hides below the brilliant mist.
</Paragraph>
<Paragraph
  blockProps={{
    pageId: '8b23e77d88a6400283c7a9e0448f97aa',
    id: '7ab02909-3fd1-4a41-8723-bd689fb8f978',
    created_time: '2022-04-13T21:57:00.000Z',
    last_edited_time: '2022-04-26T21:52:00.000Z'
  }}
>
  Behind her, the victim's blood pools and ripples through valleys in the asphalt. Following gravity
  to a crack designed for rain, dark, glistening beads drop silently down, down, down, to be
  swallowed by the sea.
</Paragraph>
