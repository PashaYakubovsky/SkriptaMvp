 uniform vec2 uResolution;
uniform sampler2D uPictureTexture;
uniform sampler2D uDisplacementTexture;
uniform float uSize;
uniform float uTime;
uniform float uAngleScale;
uniform float uDisplacementScale;
uniform float uDisplacementSpeed;
uniform bool uRandomScale;

attribute float aIntensity;
attribute float aAngle;
attribute float aScale;

varying vec3 vColor;
void main() {
    // Displacement
    vec3 newPosition = position;
    vec2 newUv = uv;
    newUv.y = 1.0 - newUv.y;
    newUv.x = 1.0 - newUv.x;
    float displacementIntensity = texture(uDisplacementTexture, newUv).r;
    displacementIntensity = smoothstep(0.1, uDisplacementSpeed, displacementIntensity);

    vec3 displacement = vec3(
        cos(aAngle) * uAngleScale,
        sin(aAngle) * uAngleScale,
        1.0
    );
    displacement = normalize(displacement);
    displacement *= displacementIntensity;
    displacement *= uDisplacementScale;
    displacement *= aIntensity;
    
    newPosition += displacement;


    // Final position
    vec4 modelPosition = modelMatrix * vec4(newPosition, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;
    gl_Position = projectedPosition;

    // Point size
    float pz = 0.2 * uResolution.y * uSize * (1.0 / - viewPosition.z);
    if(uRandomScale) {
        pz *= aScale;
    }
    gl_PointSize = pz;

    // Varyings
    vColor = vec3(pow(displacementIntensity, 2.0));
}