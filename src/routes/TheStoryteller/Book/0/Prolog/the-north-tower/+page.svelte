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
    coverCreditURL: 'https://unsplash.com/photos/eEljzRILh4I',
    coverCreditAuthor: 'Riley, with modifications'
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
    id: 'f72519bd-4de4-4bfd-960b-03ecbc10b001',
    created_time: '2022-06-22T00:10:00.000Z',
    last_edited_time: '2022-06-22T00:10:00.000Z'
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
    id: '7c9221cb-1d45-4479-9fdb-38bd3cfd5056',
    created_time: '2022-06-22T00:10:00.000Z',
    last_edited_time: '2022-06-22T00:10:00.000Z'
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
    id: '7f6d4254-ccfa-4835-bcf4-c01ce71b6f0c',
    created_time: '2022-06-22T00:10:00.000Z',
    last_edited_time: '2022-06-22T00:10:00.000Z'
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
    id: '84badac3-5f4f-4f52-a531-dc80fa56fa9e',
    created_time: '2022-06-22T00:10:00.000Z',
    last_edited_time: '2022-06-22T00:10:00.000Z'
  }}
>
  “Hey, no need to forfeit, Rooch. You weren't losing <em>that</em> bad!”
</Paragraph>
<Paragraph
  blockProps={{
    pageId: '8b23e77d88a6400283c7a9e0448f97aa',
    id: '032ce542-f00d-4c12-bd9c-4ff676f4f5d8',
    created_time: '2022-06-22T00:10:00.000Z',
    last_edited_time: '2022-06-22T00:10:00.000Z'
  }}
>
  Suruchi just stares at him. He sighs, nodding. With two fingers held out like an airline attendant
  marking the exits, he makes a sliding motion along the chess board's edge, revealing a simple
  control panel. He pinches a small cartoon magnet to make the pieces fly back into place.
</Paragraph>
<Paragraph
  blockProps={{
    pageId: '8b23e77d88a6400283c7a9e0448f97aa',
    id: 'a49e2eec-922b-4990-9a64-75bd2f39846d',
    created_time: '2022-06-22T00:10:00.000Z',
    last_edited_time: '2022-06-22T00:10:00.000Z'
  }}
>
  “To be continued,” he says, squeezing the board between open palms until it's the size of a
  baseball. He shifts it to the dashboard with a wave, opens the passenger-side door, and steps down
  to the road. Suruchi takes a deep breath and steps out from behind the override-wheel.
</Paragraph>
<Paragraph
  blockProps={{
    pageId: '8b23e77d88a6400283c7a9e0448f97aa',
    id: '5fbeb56e-55a6-428a-b763-f3a4f5b8c4a7',
    created_time: '2022-06-22T00:10:00.000Z',
    last_edited_time: '2022-06-22T00:10:00.000Z'
  }}
>
  “I think it came from the back,” Mark calls from the other side of the truck. “Oh fuuuuu…. Yep.
  That would do it…”
</Paragraph>
<Paragraph
  blockProps={{
    pageId: '8b23e77d88a6400283c7a9e0448f97aa',
    id: '9227799d-2cf2-4192-9b7f-b9db494bf352',
    created_time: '2022-06-22T00:10:00.000Z',
    last_edited_time: '2022-06-22T00:10:00.000Z'
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
    id: '09af0603-d034-41a5-a4c3-5b01f8fe8eea',
    created_time: '2022-06-22T00:10:00.000Z',
    last_edited_time: '2022-06-22T00:10:00.000Z'
  }}
>
  This isn't Mark's first ride, but it is his first year on the road, and he's hanging back, aghast.
  Uncertain.
</Paragraph>
<Paragraph
  blockProps={{
    pageId: '8b23e77d88a6400283c7a9e0448f97aa',
    id: '8a01d265-e58e-4de4-a224-f752d35f8065',
    created_time: '2022-06-22T00:10:00.000Z',
    last_edited_time: '2022-06-22T00:10:00.000Z'
  }}
>
  “You ok?”
</Paragraph>
<Paragraph
  blockProps={{
    pageId: '8b23e77d88a6400283c7a9e0448f97aa',
    id: '0a3c3c42-5015-4b69-9813-cac866e01aea',
    created_time: '2022-06-22T00:10:00.000Z',
    last_edited_time: '2022-06-22T00:10:00.000Z'
  }}
>
  He nods, but says nothing. He's chewing on his lips. Suruchi has never seen anything like this
  either, but she's seen enough minds blown from “acute lead poisoning” to know she can handle it.
  She nods back.
</Paragraph>
<Paragraph
  blockProps={{
    pageId: '8b23e77d88a6400283c7a9e0448f97aa',
    id: '6b83f846-4224-476a-8445-79f1ed9bbe11',
    created_time: '2022-06-22T00:10:00.000Z',
    last_edited_time: '2022-06-22T00:10:00.000Z'
  }}
>
  “Radio Control that we've got an FTF. I’ll get started on obs.”
</Paragraph>
<Paragraph
  blockProps={{
    pageId: '8b23e77d88a6400283c7a9e0448f97aa',
    id: 'c21526c2-08cf-4ab5-a6a8-291f73399332',
    created_time: '2022-06-22T00:10:00.000Z',
    last_edited_time: '2022-06-22T00:10:00.000Z'
  }}
>
  “Failure to fly?” Mark says, rediscovering his tomfool bravado. “I was thinking vehicle
  collision.”
</Paragraph>
<Paragraph
  blockProps={{
    pageId: '8b23e77d88a6400283c7a9e0448f97aa',
    id: 'e2773ad6-61c7-442d-9e65-46491f7907e3',
    created_time: '2022-06-22T00:10:00.000Z',
    last_edited_time: '2022-06-22T00:10:00.000Z'
  }}
>
  She raises an unseen eyebrow at him as he walks back to the truck, chuckling to himself.
</Paragraph>
<Paragraph
  blockProps={{
    pageId: '8b23e77d88a6400283c7a9e0448f97aa',
    id: '6510f088-633a-4909-9635-103cda940778',
    created_time: '2022-06-22T00:10:00.000Z',
    last_edited_time: '2022-06-22T00:10:00.000Z'
  }}
>
  “<em>Merc. Headlights,</em>” Suruchi says, subconsciously adjusting her enunciation for the
  benefit of the <em>hgOS</em> listener in her pendant.
</Paragraph>
<Paragraph
  blockProps={{
    pageId: '8b23e77d88a6400283c7a9e0448f97aa',
    id: 'b77d214d-69e3-43dc-bb1f-49354f2598f4',
    created_time: '2022-06-22T00:10:00.000Z',
    last_edited_time: '2022-06-22T00:10:00.000Z'
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
    id: 'a23ec2f2-37fe-43fd-95f8-1c1ac42f3aa9',
    created_time: '2022-06-22T00:10:00.000Z',
    last_edited_time: '2022-06-22T00:10:00.000Z'
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
    id: '02b463b2-caef-45f5-b55a-21ce7a967a9c',
    created_time: '2022-06-22T00:10:00.000Z',
    last_edited_time: '2022-06-22T00:10:00.000Z'
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
    id: '509b113b-6603-49b3-91a3-ae8c1e34d55e',
    created_time: '2022-06-22T00:10:00.000Z',
    last_edited_time: '2022-06-22T00:10:00.000Z'
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
    id: 'a44a68ec-4933-424f-a7d5-fdf3c876ea31',
    created_time: '2022-06-22T00:10:00.000Z',
    last_edited_time: '2022-06-22T00:10:00.000Z'
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
    id: 'a608bd9b-1a2f-4c64-8476-17ba8e5f9a14',
    created_time: '2022-06-22T00:10:00.000Z',
    last_edited_time: '2022-06-22T00:10:00.000Z'
  }}
>
  She puts her port in recording mode with a wave, and slowly walks around the body, letting it
  generate a complete cap of the scene: lidar model, color map, infrared, GPS tagging…the whole 8
  meters. Standard procedure.
</Paragraph>
<Paragraph
  blockProps={{
    pageId: '8b23e77d88a6400283c7a9e0448f97aa',
    id: '21e452f7-e12f-4e5c-9707-402be218e3b3',
    created_time: '2022-06-22T00:10:00.000Z',
    last_edited_time: '2022-06-22T00:10:00.000Z'
  }}
>
  When this is done, she plucks a pair of nitrile gloves from a box inside the truck, and prepares
  to take notes.
</Paragraph>
<Paragraph
  blockProps={{
    pageId: '8b23e77d88a6400283c7a9e0448f97aa',
    id: 'ecebbf0b-d336-4b98-95b3-33cf91d276df',
    created_time: '2022-06-22T00:10:00.000Z',
    last_edited_time: '2022-06-22T00:10:00.000Z'
  }}
>
  “<em>Merc. Transcribe.</em>”
</Paragraph>
<Paragraph
  blockProps={{
    pageId: '8b23e77d88a6400283c7a9e0448f97aa',
    id: '29e3417f-08ff-48f4-af5e-737c30d7ee5c',
    created_time: '2022-06-22T00:10:00.000Z',
    last_edited_time: '2022-06-22T00:10:00.000Z'
  }}
>
  A virtual page now hangs in her riph, ready to soak up her thoughts. With careful articulation,
  Suruchi begins her observations, occasionally darting her eyes to the page to check for
  mistranslations.
</Paragraph>
<Paragraph
  blockProps={{
    pageId: '8b23e77d88a6400283c7a9e0448f97aa',
    id: 'de1e8156-374c-4e98-819f-44c6929a902a',
    created_time: '2022-06-22T00:10:00.000Z',
    last_edited_time: '2022-06-22T00:10:00.000Z'
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
    id: '9398811c-7742-4854-978d-fb4efa252962',
    created_time: '2022-06-22T00:10:00.000Z',
    last_edited_time: '2022-06-22T00:10:00.000Z'
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
    id: 'daa3a343-f2ad-45ef-9617-7ac03202c12b',
    created_time: '2022-06-22T00:10:00.000Z',
    last_edited_time: '2022-06-22T00:10:00.000Z'
  }}
>
  “No portal. No sign of pendant straps,” Suruchi says, with a cursory peak at her notes. Then
  curiosity gets the best of her and she pauses the transcription by twisting her right hand into a
  closed fist, like a conductor silencing the orchestra.
</Paragraph>
<Paragraph
  blockProps={{
    pageId: '8b23e77d88a6400283c7a9e0448f97aa',
    id: '5ca68a35-0add-4fa1-803a-4026cc3246d9',
    created_time: '2022-06-22T00:10:00.000Z',
    last_edited_time: '2022-06-22T00:10:00.000Z'
  }}
>
  “Hey, Mark,” she hollers, still crouching, “come give me a hand!”
</Paragraph>
<Paragraph
  blockProps={{
    pageId: '8b23e77d88a6400283c7a9e0448f97aa',
    id: 'dd64440d-9ee5-4647-961b-30547f8ed22c',
    created_time: '2022-06-22T00:10:00.000Z',
    last_edited_time: '2022-06-22T00:10:00.000Z'
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
    id: '58d3ec3a-102a-4d7a-a805-de85037e83d6',
    created_time: '2022-06-22T00:10:00.000Z',
    last_edited_time: '2022-06-22T00:10:00.000Z'
  }}
>
  “<em>Behen</em><em><strong>chod!</strong></em>” Suruchi swears, taking advantage of one of the few
  phrases her parents have passed down to her from her immigrant ancestors. “The poor fucker’s green
  guts are all down her leg…ugh.”
</Paragraph>
<Paragraph
  blockProps={{
    pageId: '8b23e77d88a6400283c7a9e0448f97aa',
    id: '18c855eb-4138-457d-996b-9b977f99f06f',
    created_time: '2022-06-22T00:10:00.000Z',
    last_edited_time: '2022-06-22T00:10:00.000Z'
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
    id: '24f30a98-7297-4280-9b67-0acc2065b2c0',
    created_time: '2022-06-22T00:10:00.000Z',
    last_edited_time: '2022-06-22T00:10:00.000Z'
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
    id: '99d08b5e-618a-4a4e-9278-d4954780841e',
    created_time: '2022-06-22T00:10:00.000Z',
    last_edited_time: '2022-06-22T00:10:00.000Z'
  }}
>
  Flipping the card around and unfolding it, she glances over the street address (no addressee,
  destination: Hawaii) an uncancelled Forever stamp on the right, then focuses on the…message?…on
  the left. It’s looks like an Al mark, but without the logo and, like the address, it’s written in
  blunt pencil; each block traced and retraced, leaving cuts in the card that cannot be erased.
</Paragraph>
<Quote
  >📸<span slot="children"
    ><Image
      url="/assets/TheStoryteller/Book/0/Prolog/the-north-tower/355d0f7f-9ddd-47c2-94bb-5305af209741.svg"
    />
  </span></Quote
><Paragraph
  blockProps={{
    pageId: '8b23e77d88a6400283c7a9e0448f97aa',
    id: '2ad33bc2-8cab-480f-a9f9-55a17b17ac24',
    created_time: '2022-06-22T00:10:00.000Z',
    last_edited_time: '2022-06-22T00:10:00.000Z'
  }}
>
  Nonplussed, Suruchi shrugs, refolds the card, and tries to slide it back into the dress pocket.
</Paragraph>
<Paragraph
  blockProps={{
    pageId: '8b23e77d88a6400283c7a9e0448f97aa',
    id: '483fc6e3-6752-438e-9372-3603464850f1',
    created_time: '2022-06-22T00:10:00.000Z',
    last_edited_time: '2022-06-22T00:10:00.000Z'
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
    id: 'b0186ac6-56c2-4fef-a338-0b9e9b8c61d1',
    created_time: '2022-06-22T00:10:00.000Z',
    last_edited_time: '2022-06-22T00:10:00.000Z'
  }}
>
  “Why couldn't you have jumped into the Bay like everyone else?” she grumbles.
</Paragraph>
<Paragraph
  blockProps={{
    pageId: '8b23e77d88a6400283c7a9e0448f97aa',
    id: '19844750-c6b2-46dd-b5fa-435d3a57c6fc',
    created_time: '2022-06-22T00:10:00.000Z',
    last_edited_time: '2022-06-22T00:10:00.000Z'
  }}
>
  “Maybe she's afraid of sharks.”
</Paragraph>
<Paragraph
  blockProps={{
    pageId: '8b23e77d88a6400283c7a9e0448f97aa',
    id: 'a3bbe221-70a1-49a5-8836-84dad46ad566',
    created_time: '2022-06-22T00:10:00.000Z',
    last_edited_time: '2022-06-22T00:10:00.000Z'
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
    id: 'f8d6c56c-9855-4cd5-834c-5ec9896c1b03',
    created_time: '2022-06-22T00:10:00.000Z',
    last_edited_time: '2022-06-22T00:10:00.000Z'
  }}
>
  “Yeah, well…” she says, stifling a snigger. “Don’t creep on me like that! And don't call me
  Rooch.”
</Paragraph>
<Paragraph
  blockProps={{
    pageId: '8b23e77d88a6400283c7a9e0448f97aa',
    id: '20b50840-06f7-4ec5-bd62-f9cfaea8b7cb',
    created_time: '2022-06-22T00:10:00.000Z',
    last_edited_time: '2022-06-22T00:10:00.000Z'
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
    id: '0c97f41c-e142-419d-97ab-05d6a5d1d408',
    created_time: '2022-06-22T00:10:00.000Z',
    last_edited_time: '2022-06-22T00:10:00.000Z'
  }}
>
  There are drops forming on his upper lip and chin, but Suruchi knows he’ll heal soon enough.
  Compared with what she has just seen, Mark’s bloody nose seems like so much stage paint.
</Paragraph>
<Paragraph
  blockProps={{
    pageId: '8b23e77d88a6400283c7a9e0448f97aa',
    id: '8659e67c-d419-4100-a194-0f2b0d11d204',
    created_time: '2022-06-22T00:10:00.000Z',
    last_edited_time: '2022-06-22T00:10:00.000Z'
  }}
>
  “You look like a well-fed vampire,” she teases him.
</Paragraph>
<Paragraph
  blockProps={{
    pageId: '8b23e77d88a6400283c7a9e0448f97aa',
    id: '3cedb936-46ce-43d3-83ee-ea4fcc73a13b',
    created_time: '2022-06-22T00:10:00.000Z',
    last_edited_time: '2022-06-22T00:10:00.000Z'
  }}
>
  “Fuck you,” is the best he can do.
</Paragraph>
<Paragraph
  blockProps={{
    pageId: '8b23e77d88a6400283c7a9e0448f97aa',
    id: '6faca85f-00dc-42bd-9247-f4f4e9eab725',
    created_time: '2022-06-22T00:10:00.000Z',
    last_edited_time: '2022-06-22T00:10:00.000Z'
  }}
>
  Suruchi’s thoughts travel from vampires to spirits, and a chill traces her spine.
</Paragraph>
<Paragraph
  blockProps={{
    pageId: '8b23e77d88a6400283c7a9e0448f97aa',
    id: 'c4b86a99-3290-4d0d-b677-22b8d7a228e6',
    created_time: '2022-06-22T00:10:00.000Z',
    last_edited_time: '2022-06-22T00:10:00.000Z'
  }}
>
  “Sorry,” she says, not to Mark, but to whatever ghosts might hang here, tangled in the fog.
</Paragraph>
<Paragraph
  blockProps={{
    pageId: '8b23e77d88a6400283c7a9e0448f97aa',
    id: 'd3217397-4079-4c76-8485-4b61599836cc',
    created_time: '2022-06-22T00:10:00.000Z',
    last_edited_time: '2022-06-22T00:10:00.000Z'
  }}
>
  “Good. You should be.”
</Paragraph>
<Paragraph
  blockProps={{
    pageId: '8b23e77d88a6400283c7a9e0448f97aa',
    id: 'd4367a54-ffb9-4ed4-97a5-e04268c95fcb',
    created_time: '2022-06-22T00:10:00.000Z',
    last_edited_time: '2022-06-22T00:10:00.000Z'
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
    id: '56a28079-d8d2-4fdc-9a08-6ea4578e244b',
    created_time: '2022-06-22T00:10:00.000Z',
    last_edited_time: '2022-06-22T00:10:00.000Z'
  }}
>
  “Chutiya <em>gadhe!”</em>
</Paragraph>
<Paragraph
  blockProps={{
    pageId: '8b23e77d88a6400283c7a9e0448f97aa',
    id: '025d2035-104f-45a8-9990-555f26911372',
    created_time: '2022-06-22T00:10:00.000Z',
    last_edited_time: '2022-06-22T00:10:00.000Z'
  }}
>
  They explode together then. The laughter feels good, as had the apology. Suruchi has forgotten
  about the hitchhiker in her navy blue cargo slacks. Being nothing more, after all, than worn ink
  and wood pulp, it will come to mind at only the most inopportune of times.
</Paragraph>
<Paragraph
  blockProps={{
    pageId: '8b23e77d88a6400283c7a9e0448f97aa',
    id: '469b17b3-14fc-4348-8414-2aa3c10697d5',
    created_time: '2022-06-22T00:10:00.000Z',
    last_edited_time: '2022-06-22T00:10:00.000Z'
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
    id: 'a2cd1ba5-8803-467c-8f7d-15952b27d441',
    created_time: '2022-06-22T00:10:00.000Z',
    last_edited_time: '2022-06-22T00:10:00.000Z'
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
    id: 'e5c53bcc-8548-4cd4-a1d3-d4d71128018b',
    created_time: '2022-06-22T00:10:00.000Z',
    last_edited_time: '2022-06-22T00:10:00.000Z'
  }}
>
  In the steam-filled locker room, Suruchi will stumble on the card while taking off her pants. For
  a moment, she will stare at it blankly while ancient pathways in her brain declare the paper <em
    >trash: something to be recycled</em
  >. Then she’ll hear the dripping silence of an ended shower around the corner, and, panicked,
  Suruchi will plunge the contraband into the depths of her gym bag, there to be forgotten once more
  as she cloaks her guilt in badinage, bantering with her towel-wrapped colleague before biking
  home.
</Paragraph>
<Paragraph
  blockProps={{
    pageId: '8b23e77d88a6400283c7a9e0448f97aa',
    id: '94501140-0f4e-435b-b02d-44c1fc09a3c9',
    created_time: '2022-06-22T00:10:00.000Z',
    last_edited_time: '2022-06-22T00:10:00.000Z'
  }}
>
  There, emptying her duffel into a laundry basket, Suruchi will finally pause to give the postcard
  a slow look. Only then will it occur to her that she is carrying someone else's property. Not the
  stiff’s, of course. The deceased is now just a pile of doomed meat, incapable of <em>owning</em>
  anything. But the printed address and the valid postage will argue for a future owner. Someone—someone
  whose name starts with <em>R?</em>—was supposed to receive this message in the mail. Or were they?
</Paragraph>
<Paragraph
  blockProps={{
    pageId: '8b23e77d88a6400283c7a9e0448f97aa',
    id: '8d1a3b3e-85e9-4b3f-acea-53147d362d97',
    created_time: '2022-06-22T00:10:00.000Z',
    last_edited_time: '2022-06-22T00:10:00.000Z'
  }}
>
  When Suruchi has exhausted her quiver of unanswerable questions, she will settle on posting the
  card the next morning in the blue box down the street.
</Paragraph>
<Paragraph
  blockProps={{
    pageId: '8b23e77d88a6400283c7a9e0448f97aa',
    id: '2090e98f-9772-4d48-8729-390c9c7eb79c',
    created_time: '2022-06-22T00:10:00.000Z',
    last_edited_time: '2022-06-22T00:10:00.000Z'
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
    id: 'b164580c-0cdf-4abe-82cf-f34a58fe3b4c',
    created_time: '2022-06-22T00:10:00.000Z',
    last_edited_time: '2022-06-22T00:10:00.000Z'
  }}
>
  After a night full of dread-deepening dreams, Suruchi will revise her deadline for mailing the
  card to: Someday. <em>Maybe.</em>
</Paragraph>
<Paragraph
  blockProps={{
    pageId: '8b23e77d88a6400283c7a9e0448f97aa',
    id: '3ddcdac8-3516-4857-9bcd-46d59d133204',
    created_time: '2022-06-22T00:10:00.000Z',
    last_edited_time: '2022-06-22T00:10:00.000Z'
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
    id: '68b0eb53-735c-4e9a-b07f-ec1c3f07f187',
    created_time: '2022-06-22T00:10:00.000Z',
    last_edited_time: '2022-06-22T00:10:00.000Z'
  }}
>
  Eventually.
</Paragraph>
<Paragraph
  blockProps={{
    pageId: '8b23e77d88a6400283c7a9e0448f97aa',
    id: 'bf856e11-a463-45f9-a524-fbc66129fe52',
    created_time: '2022-06-22T00:10:00.000Z',
    last_edited_time: '2022-06-22T00:10:00.000Z'
  }}
>
  But for now, Suruchi and Mark are having a good laugh as she fetches supplies to help him mop up.
  “Medic!” he hollers as another carmine drop splashes into his cupped, albescent palm.
</Paragraph>
<Paragraph
  blockProps={{
    pageId: '8b23e77d88a6400283c7a9e0448f97aa',
    id: '85cb8454-5d70-47f1-b0f2-e48dfc239771',
    created_time: '2022-06-22T00:10:00.000Z',
    last_edited_time: '2022-06-22T00:10:00.000Z'
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
    id: '465a5e96-caf5-4d7e-9eb9-d570aecc116f',
    created_time: '2022-06-22T00:10:00.000Z',
    last_edited_time: '2022-06-22T00:10:00.000Z'
  }}
>
  As Mark sidles over to greet the newcomers, Suruchi stares off in the other direction, out toward
  the pitch-black ocean that hides below the brilliant mist.
</Paragraph>
<Paragraph
  blockProps={{
    pageId: '8b23e77d88a6400283c7a9e0448f97aa',
    id: '0c2c1213-3559-4351-b27b-9ee72fbb363e',
    created_time: '2022-06-22T00:10:00.000Z',
    last_edited_time: '2022-06-22T00:10:00.000Z'
  }}
>
  Behind her, the victim's blood pools and ripples through valleys in the asphalt. Following gravity
  to a crack designed for rain, dark, glistening beads drop silently down, down, down, to be
  swallowed by the sea.
</Paragraph>
